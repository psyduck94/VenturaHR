package com.example.venturahr.data.remote.repository

import android.util.Log
import com.example.venturahr.data.local.cache.UserCache
import com.example.venturahr.data.mapper.UserMapper
import com.example.venturahr.data.remote.model.UserResponse
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.User
import com.example.venturahr.domain.repository.UserRepository
import kotlinx.coroutines.withTimeout
import retrofit2.Response
import java.lang.Exception

class UserRepositoryImpl(
    private val venturaHrService: VenturaHrService,
    private val userCache: UserCache
) : UserRepository {

    private companion object {
        private const val MIN_RESPONSE_CODE = 200
        private const val MAX_RESPONSE_CODE = 299
        private const val REQUEST_TIMEOUT = 5000L
    }

    override suspend fun createUser(user: User): RequestStatus<String> {
        return withTimeout(REQUEST_TIMEOUT) {
            try {
                val response = venturaHrService.createUser(UserMapper.mapDomainToResponse(user))

                if (response.code() in MIN_RESPONSE_CODE..MAX_RESPONSE_CODE) {
                    printResponseUrl(response)
                    return@withTimeout RequestStatus.Success("User created successfully!")
                } else {
                    printResponseUrl(response)
                    return@withTimeout RequestStatus.Error("User was not saved... an error has occurred")
                }
            } catch (exception: Exception) {
                val exceptionMessage = exception.message.toString()
                Log.d("post USER - error", exceptionMessage)
                return@withTimeout RequestStatus.Error(exceptionMessage)
            }
        }
    }

    override suspend fun getUserId(email: String): String {
        Log.d("get USER ID - EMAIL", email)
        return withTimeout(REQUEST_TIMEOUT) {
            try {
                val response = venturaHrService.getUserIdByEmail(email)
                if (response.code() in MIN_RESPONSE_CODE..MAX_RESPONSE_CODE) {
                    Log.d("get USER ID - URL", response.raw().request().url().toString())
                    return@withTimeout response.body() ?: ""
                } else {
                    Log.d("get USER ID - URL", response.raw().request().url().toString())
                    return@withTimeout "Erro"
                }
            } catch (exception: Exception) {
                val exceptionMessage = exception.message.toString()
                Log.d("get USER ID - error", exceptionMessage)
                return@withTimeout "Erro"
            }
        }
    }

    override fun getApplyButtonState(jobVacancyId: String): Boolean {
        return userCache.getApplyButtonState(jobVacancyId)
    }

    override fun setApplyButtonState(jobVacancyId: String, state: Boolean) {
        userCache.setApplyButtonState(jobVacancyId, state)
    }

    private fun printResponseUrl(response: Response<UserResponse>) {
        Log.d("post USER - URL", response.raw().request().url().toString())
    }
}
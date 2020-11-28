package com.example.venturahr.data.remote.repository

import android.util.Log
import com.example.venturahr.data.mapper.UserMapper
import com.example.venturahr.data.remote.model.UserResponse
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.User
import com.example.venturahr.domain.repository.UserRepository
import kotlinx.coroutines.withTimeout
import retrofit2.Response
import java.lang.Exception

class UserRepositoryImpl(private val venturaHrService: VenturaHrService) : UserRepository {

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
                    return@withTimeout RequestStatus.Success("User created successfuly!")
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

    private fun printResponseUrl(response: Response<UserResponse>) {
        Log.d("post USER - URL", response.raw().request().url().toString())
    }
}
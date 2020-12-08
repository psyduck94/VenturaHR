package com.example.venturahr.data.remote.repository

import android.util.Log
import com.example.venturahr.data.mapper.CriteriaAnswerMapper
import com.example.venturahr.data.remote.model.CriteriaAnswerData
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.CriteriaAnswer
import com.example.venturahr.domain.repository.CriteriaAnswerRepository
import kotlinx.coroutines.withTimeout
import retrofit2.Response

class CriteriaAnswerRepositoryImpl(private val venturaHrService: VenturaHrService) :
    CriteriaAnswerRepository {

    private companion object {
        private const val MIN_RESPONSE_CODE = 200
        private const val MAX_RESPONSE_CODE = 299
        private const val REQUEST_TIMEOUT = 5000L
    }

    override suspend fun createCriteriaAnswer(criteriaAnswer: CriteriaAnswer): RequestStatus<String> {
        return withTimeout(REQUEST_TIMEOUT) {
            try {
                val response = venturaHrService.createCriteriaAnswer(
                    CriteriaAnswerMapper.mapDomainToRequestData(criteriaAnswer)
                )

                if (response.code() in MIN_RESPONSE_CODE..MAX_RESPONSE_CODE) {
                    printResponseUrl(response)
                    return@withTimeout RequestStatus.Success("Criteria Answer created successfully")
                } else {
                    printResponseUrl(response)
                    return@withTimeout RequestStatus.Error("Criteria Answer was not saved... an error has occured")
                }
            } catch (exception: Exception) {
                val exceptionMessage = exception.message.toString()
                Log.d("post CRITERIA - error", exceptionMessage)
                return@withTimeout RequestStatus.Error(exceptionMessage)
            }
        }
    }

    private fun printResponseUrl(response: Response<CriteriaAnswerData>) {
        Log.d("post CRITERIA - URL", response.raw().request().url().toString())
    }

}
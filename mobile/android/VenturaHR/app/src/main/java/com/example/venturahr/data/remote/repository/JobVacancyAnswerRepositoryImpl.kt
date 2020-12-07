package com.example.venturahr.data.remote.repository

import android.util.Log
import com.example.venturahr.data.mapper.JobVacancyAnswerMapper
import com.example.venturahr.data.remote.model.JobVacancyAnswerResponse
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.JobVacancyAnswer
import com.example.venturahr.domain.repository.JobVacancyAnswerRepository
import kotlinx.coroutines.withTimeout
import retrofit2.Response

class JobVacancyAnswerRepositoryImpl(private val venturaHrService: VenturaHrService) :
    JobVacancyAnswerRepository {

    private companion object {
        private const val MIN_RESPONSE_CODE = 200
        private const val MAX_RESPONSE_CODE = 299
        private const val REQUEST_TIMEOUT = 5000L
    }

    override suspend fun createJobVacancyAnswer(jobVacancyAnswer: JobVacancyAnswer): RequestStatus<JobVacancyAnswerResponse> {
        return withTimeout(REQUEST_TIMEOUT) {
            try {
                val response = venturaHrService
                    .createJobVacancyAnswer(
                        JobVacancyAnswerMapper
                            .mapDomainToRequestData(jobVacancyAnswer)
                    )

                if (response.code() in MIN_RESPONSE_CODE..MAX_RESPONSE_CODE) {
                    printResponseUrl(response)
                    val jobVacancyAnswer = response.body()
                    return@withTimeout RequestStatus.Success(jobVacancyAnswer as JobVacancyAnswerResponse)
                } else {
                    printResponseUrl(response)
                    return@withTimeout RequestStatus.Error("JobAnswer was not saved... an error has occurred")
                }
            } catch (exception: Exception) {
                val exceptionMessage = exception.message.toString()
                Log.d("post USER - error", exceptionMessage)
                return@withTimeout RequestStatus.Error(exceptionMessage)
            }
        }
    }

    private fun printResponseUrl(response: Response<JobVacancyAnswerResponse>) {
        Log.d("post USER - URL", response.raw().request().url().toString())
    }
}
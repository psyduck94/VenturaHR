package com.example.venturahr.data.remote.repository

import android.util.Log
import com.example.venturahr.data.mapper.JobVacancyMapper
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.JobVacancy
import com.example.venturahr.domain.repository.JobVacancyRepository
import kotlinx.coroutines.withTimeout
import java.lang.Exception

class JobVacancyRepositoryImpl(private val venturaHrService: VenturaHrService) :
    JobVacancyRepository {

    private companion object {
        private const val MIN_RESPONSE_CODE = 200
        private const val MAX_RESPONSE_CODE = 299
        private const val REQUEST_TIMEOUT = 5000L
    }

    override suspend fun listJobVacancies(): RequestStatus<List<JobVacancy>> {
        return withTimeout(REQUEST_TIMEOUT) {
            try {
                val response = venturaHrService.listJobVacancies()

                if (response.code() in MIN_RESPONSE_CODE..MAX_RESPONSE_CODE) {
                    val jobVacancies = response.body()?.let { JobVacancyMapper.mapResponseToDomain(it) }

                    Log.d("listJobVacancies", response.raw().request().url().toString())
                    return@withTimeout RequestStatus.Success(jobVacancies as List<JobVacancy>)
                } else {
                    Log.d("listJobVacancies", response.raw().request().url().toString())
                    return@withTimeout RequestStatus.Error(response.message())
                }
            } catch (exception: Exception) {
                Log.d("listJobVacancies", exception.message.toString())
                return@withTimeout RequestStatus.Error(exception.message.toString())
            }
        }
    }

    override suspend fun createJobVacancy(jobVacancy: JobVacancy): RequestStatus<Nothing> {
        TODO("Not yet implemented")
    }
}
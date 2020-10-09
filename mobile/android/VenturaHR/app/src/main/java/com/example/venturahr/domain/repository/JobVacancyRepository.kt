package com.example.venturahr.domain.repository

import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.JobVacancy

interface JobVacancyRepository {
    suspend fun listJobVacancies(): RequestStatus<List<JobVacancy>>
    suspend fun createJobVacancy(jobVacancy: JobVacancy): RequestStatus<Nothing>
}
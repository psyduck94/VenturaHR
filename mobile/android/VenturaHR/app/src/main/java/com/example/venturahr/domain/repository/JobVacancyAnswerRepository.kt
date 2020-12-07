package com.example.venturahr.domain.repository

import com.example.venturahr.data.remote.model.JobVacancyAnswerResponse
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.JobVacancyAnswer

interface JobVacancyAnswerRepository {
    suspend fun createJobVacancyAnswer(jobVacancyAnswer: JobVacancyAnswer): RequestStatus<JobVacancyAnswerResponse>
}
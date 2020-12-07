package com.example.venturahr.data.mapper

import com.example.venturahr.data.remote.model.JobVacancyAnswerData
import com.example.venturahr.data.remote.model.JobVacancyAnswerResponse
import com.example.venturahr.domain.model.JobVacancyAnswer

class JobVacancyAnswerMapper {
    companion object {
        fun mapDomainToRequestData(jobVacancyAnswer: JobVacancyAnswer): JobVacancyAnswerData {
            return JobVacancyAnswerData(
                candidate = jobVacancyAnswer.candidateId,
                jobVacancy = jobVacancyAnswer.jobVacancyId
            )
        }

        fun mapResponseToDomain(jobVacancyAnswerData: JobVacancyAnswerResponse): JobVacancyAnswer {
            return JobVacancyAnswer(
                candidateId = jobVacancyAnswerData.candidate,
                jobVacancyId = jobVacancyAnswerData.jobVacancy
            )
        }
    }
}
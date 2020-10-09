package com.example.venturahr.data.mapper

import com.example.venturahr.data.remote.model.JobVacancyResponse
import com.example.venturahr.domain.model.JobVacancy

class JobVacancyMapper {

    companion object {

        fun mapResponseToDomain(jobVacancyResponse: List<JobVacancyResponse>): List<JobVacancy> {
            val jobVacanciesDomain = mutableListOf<JobVacancy>()
            jobVacancyResponse.map {
                val jobVacancyDomain = JobVacancy(
                    id = it.id,
                    description = it.description,
                    city = it.city,
                    state = it.state,
                    companyName = it.companyName,
                    contractType = it.contractType,
                    contractDuration = it.contractDuration,
                    criteriaList = it.criteriaList
                )
                jobVacanciesDomain.add(jobVacancyDomain)
            }
            return jobVacanciesDomain
        }
    }

}
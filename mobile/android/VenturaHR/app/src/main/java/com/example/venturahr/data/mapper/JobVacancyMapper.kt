package com.example.venturahr.data.mapper

import com.example.venturahr.data.remote.model.AddressResponse
import com.example.venturahr.data.remote.model.CriteriaResponse
import com.example.venturahr.data.remote.model.JobVacancyResponse
import com.example.venturahr.domain.model.Address
import com.example.venturahr.domain.model.Criteria
import com.example.venturahr.domain.model.JobVacancy

class JobVacancyMapper {

    companion object {

        fun mapResponseToDomain(jobVacancyResponse: List<JobVacancyResponse>): List<JobVacancy> {
            val jobVacanciesDomain = mutableListOf<JobVacancy>()
            jobVacancyResponse.map {
                val jobVacancyDomain = JobVacancy(
                    id = it.id,
                    title = it.title,
                    description = it.description,
                    address = mapAddressResponseToDomain(it.address),
                    companyName = it.companyName,
                    companyLogo = it.companyLogo,
                    companyDescription = it.companyDescription,
                    contractType = it.contractType,
                    contractDuration = it.contractDuration,
                    closingDate = it.closingDate,
                    criteriaList = mapCriteriaResponseToDomain(it.criteriaList)
                )
                jobVacanciesDomain.add(jobVacancyDomain)
            }
            return jobVacanciesDomain
        }

        private fun mapAddressResponseToDomain(adressResponse: AddressResponse): Address {
            return Address(
                id = adressResponse.id,
                country = adressResponse.country,
                state = adressResponse.state,
                city = adressResponse.city,
                streetName = adressResponse.streetName
            )
        }

        private fun mapCriteriaResponseToDomain(criteriaResponseList: List<CriteriaResponse>): List<Criteria> {
            val domainCriteriaList = mutableListOf<Criteria>()
            for (responseCriteria in criteriaResponseList) {
                val domainCriteria = Criteria(
                    id = responseCriteria.id,
                    name = responseCriteria.name,
                    pmd = responseCriteria.pmd,
                    weight = responseCriteria.weight,
                    description = responseCriteria.description
                )
                domainCriteriaList.add(domainCriteria)
            }
            return domainCriteriaList
        }
    }

}
package com.example.venturahr.data.mapper

import com.example.venturahr.data.remote.model.CriteriaAnswerData
import com.example.venturahr.domain.model.CriteriaAnswer

class CriteriaAnswerMapper {
    companion object {
        fun mapDomainToRequestData(listOfCriteriaAnswers: List<CriteriaAnswer>): List<CriteriaAnswerData> {
            val criteriaAnswerDataList = mutableListOf<CriteriaAnswerData>()
            for (criteria in listOfCriteriaAnswers) {
                val criteriaAnswerData = CriteriaAnswerData(
                    selfEvaluation = criteria.selfEvaluation,
                    criteria = criteria.criteriaId,
                    jobVacancyAnswer = criteria.jobVacancyAnswerId
                )
                criteriaAnswerDataList.add(criteriaAnswerData)
            }
            return criteriaAnswerDataList
        }
    }
}
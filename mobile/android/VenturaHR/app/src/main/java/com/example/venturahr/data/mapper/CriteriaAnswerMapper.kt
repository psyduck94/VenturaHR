package com.example.venturahr.data.mapper

import com.example.venturahr.data.remote.model.CriteriaAnswerData
import com.example.venturahr.domain.model.CriteriaAnswer

class CriteriaAnswerMapper {
    companion object {
        fun mapDomainToRequestData(criteriaAnswer: CriteriaAnswer): CriteriaAnswerData {
            return CriteriaAnswerData(
                selfEvaluation = criteriaAnswer.selfEvaluation,
                jobVacancyAnswer = criteriaAnswer.jobVacancyAnswerId,
                criteria = criteriaAnswer.criteriaId
            )
        }
    }
}
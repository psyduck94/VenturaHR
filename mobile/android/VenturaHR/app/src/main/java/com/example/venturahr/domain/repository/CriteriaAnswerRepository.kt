package com.example.venturahr.domain.repository

import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.CriteriaAnswer

interface CriteriaAnswerRepository {
    suspend fun createCriteriaAnswer(criteriaAnswer: CriteriaAnswer): RequestStatus<String>
}
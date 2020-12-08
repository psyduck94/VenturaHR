package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.model.CriteriaAnswer
import com.example.venturahr.domain.repository.CriteriaAnswerRepository

class SaveCriteriaAnswerToRemoteApi(private val repository: CriteriaAnswerRepository) {
    suspend operator fun invoke(criteriaAnswer: CriteriaAnswer) =
        repository.createCriteriaAnswer(criteriaAnswer)
}
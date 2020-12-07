package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.model.JobVacancyAnswer
import com.example.venturahr.domain.repository.JobVacancyAnswerRepository

class SaveJobVacancyAnswerToApi(private val repository: JobVacancyAnswerRepository) {
    suspend operator fun invoke(jobVacancyAnswer: JobVacancyAnswer) = repository.createJobVacancyAnswer(jobVacancyAnswer)
}
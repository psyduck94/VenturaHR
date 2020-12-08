package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.UserRepository

class GetApplyButtonState(private val repository: UserRepository) {
    operator fun invoke(jobVacancyId: String) = repository.getApplyButtonState(jobVacancyId)
}
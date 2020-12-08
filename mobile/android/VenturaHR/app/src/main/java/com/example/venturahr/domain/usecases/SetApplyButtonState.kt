package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.UserRepository

class SetApplyButtonState(private val repository: UserRepository) {
    operator fun invoke(jobVacancyId: String, state: Boolean) =
        repository.setApplyButtonState(jobVacancyId, state)
}
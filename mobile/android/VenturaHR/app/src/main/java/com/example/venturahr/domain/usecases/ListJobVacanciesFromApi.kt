package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.JobVacancyRepository

class ListJobVacanciesFromApi(private val repository: JobVacancyRepository) {
    suspend operator fun invoke() = repository.listJobVacancies()
}
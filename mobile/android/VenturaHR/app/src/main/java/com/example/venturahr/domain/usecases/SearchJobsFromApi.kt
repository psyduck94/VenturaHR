package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.JobVacancyRepository

class SearchJobsFromApi(private val repository: JobVacancyRepository) {
    suspend operator fun invoke(queryText: String) = repository.searchJobs(queryText)
}
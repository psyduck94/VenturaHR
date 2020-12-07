package com.example.venturahr.presentation.job_vacancy_details

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.venturahr.data.remote.model.JobVacancyAnswerResponse
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.Criteria
import com.example.venturahr.domain.model.CriteriaAnswer
import com.example.venturahr.domain.model.JobVacancyAnswer
import com.example.venturahr.domain.usecases.SaveCriteriaAnswerToRemoteApi
import com.example.venturahr.domain.usecases.SaveJobVacancyAnswerToApi
import kotlinx.coroutines.launch

class JobVacancyDetailsViewModel(
    private val saveJobVacancyAnswerToApi: SaveJobVacancyAnswerToApi,
    private val saveCriteriaAnswerToRemoteApi: SaveCriteriaAnswerToRemoteApi
) :
    ViewModel() {

    fun createJobVacancyAnswer(jobVacancyId: String, criteriaList: List<Criteria>) {
        viewModelScope.launch {
            val jobVacancyAnswer = JobVacancyAnswer("candidateId", jobVacancyId)
            val requestStatus = saveJobVacancyAnswerToApi(jobVacancyAnswer)
            val jobVacancyAnswerId = handleRequestStatus(requestStatus)
            createListOfCriteriaAnswers(jobVacancyAnswerId, criteriaList)
        }
    }

    private fun handleRequestStatus(requestStatus: RequestStatus<JobVacancyAnswerResponse>): String {
        var jobVacancyAnswerId = ""
        when (requestStatus) {
            is RequestStatus.Success -> jobVacancyAnswerId = requestStatus.data.id
            else -> {}
        }
        return jobVacancyAnswerId
    }

    private suspend fun createListOfCriteriaAnswers(
        jobVacancyAnswerId: String,
        criteriaList: List<Criteria>
    ) {
        val listOfCriteriaAnswers = mutableListOf<CriteriaAnswer>()
        for (criteria in criteriaList) {
            val criteriaAnswer = CriteriaAnswer(
                selfEvaluation = 0,
                criteriaId = criteria.id,
                jobVacancyAnswerId = jobVacancyAnswerId
            )
            listOfCriteriaAnswers.add(criteriaAnswer)
        }
        saveCriteriaAnswerToRemoteApi(listOfCriteriaAnswers)
    }


}
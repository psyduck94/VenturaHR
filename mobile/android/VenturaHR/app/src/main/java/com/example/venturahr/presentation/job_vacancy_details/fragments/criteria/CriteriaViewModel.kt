package com.example.venturahr.presentation.job_vacancy_details.fragments.criteria

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.venturahr.data.remote.model.JobVacancyAnswerResponse
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.Criteria
import com.example.venturahr.domain.model.CriteriaAnswer
import com.example.venturahr.domain.model.JobVacancyAnswer
import com.example.venturahr.domain.usecases.*
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.launch

class CriteriaViewModel(
    private val saveJobVacancyAnswerToApi: SaveJobVacancyAnswerToApi,
    private val saveCriteriaAnswerToRemoteApi: SaveCriteriaAnswerToRemoteApi,
    private val getApplyButtonState: GetApplyButtonState,
    private val setApplyButtonState: SetApplyButtonState,
    private val getUserIdFromEmail: GetUserIdFromEmail,
    private val firebaseAuth: FirebaseAuth,
): ViewModel() {

    private val isApplyButtonEnabledLiveData = MutableLiveData<Boolean>()
    val isApplyButtonEnabled: LiveData<Boolean> = isApplyButtonEnabledLiveData

    private val jobAnswerCreatedSuccessfulyLiveData = MutableLiveData<Unit>()
    val jobAnswerCreatedSuccessfuly: LiveData<Unit> = jobAnswerCreatedSuccessfulyLiveData

    fun createJobVacancyAnswer(jobVacancyId: String?, criteriaList: List<Criteria>?) {
        viewModelScope.launch {
            if (jobVacancyId != null && criteriaList != null) {
                val userId = getUserIdFromEmail(getCurrentUserEmail())
                val jobVacancyAnswer = JobVacancyAnswer(userId, jobVacancyId)
                val requestStatus = saveJobVacancyAnswerToApi(jobVacancyAnswer)
                setApplyButtonState(jobVacancyId = jobVacancyId, false)
                val jobVacancyAnswerId = handleRequestStatus(requestStatus)
                createListOfCriteriaAnswers(jobVacancyAnswerId, criteriaList)
            }
        }
    }

    private fun handleRequestStatus(requestStatus: RequestStatus<JobVacancyAnswerResponse>): String {
        var jobVacancyAnswerId = ""
        when (requestStatus) {
            is RequestStatus.Success -> {
                jobAnswerCreatedSuccessfulyLiveData.postValue(Unit)
                jobVacancyAnswerId = requestStatus.data.id
            }
            else -> {}
        }
        return jobVacancyAnswerId
    }

    private fun getCurrentUserEmail(): String {
        val email = firebaseAuth.currentUser?.email
        return email ?: ""
    }

    private suspend fun createListOfCriteriaAnswers(
        jobVacancyAnswerId: String,
        criteriaList: List<Criteria>?
    ) {
        criteriaList?.let {
            for (criteria in criteriaList) {
                    val criteriaAnswer = criteria.selfEvaluation?.let { selfEvaluation ->
                        CriteriaAnswer(
                            selfEvaluation = selfEvaluation,
                            criteriaId = criteria.id,
                            jobVacancyAnswerId = jobVacancyAnswerId
                        )
                    }
                if (criteriaAnswer != null) saveCriteriaAnswerToRemoteApi(criteriaAnswer)
            }
        }
    }

    fun getButtonState(jobVacancyId: String?){
        jobVacancyId?.let {
            val isEnabled = getApplyButtonState(jobVacancyId)
            isApplyButtonEnabledLiveData.postValue(isEnabled)
        }
    }
}
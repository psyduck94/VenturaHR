package com.example.venturahr.presentation.home

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.JobVacancy
import com.example.venturahr.domain.usecases.ListJobVacanciesFromApi
import com.example.venturahr.domain.usecases.SearchJobsFromApi
import kotlinx.coroutines.launch

class HomeViewModel(
    private val listJobVacanciesFromApi: ListJobVacanciesFromApi,
    private val searchJobsFromApi: SearchJobsFromApi
) : ViewModel() {
    private val jobVacanciesLiveData = MutableLiveData<List<JobVacancy>>()
    val jobVacancies: LiveData<List<JobVacancy>> = jobVacanciesLiveData

    private val failedToListJobVacanciesLiveData = MutableLiveData<Unit>()
    val failedToListJobVacancies: LiveData<Unit> = failedToListJobVacanciesLiveData

    fun fetchJobVacanciesFromApi() {
        viewModelScope.launch {
            val requestStatus = listJobVacanciesFromApi()
            handleRequestStatus(requestStatus)
        }
    }

    fun searchJobs(queryText: String?) {
        viewModelScope.launch {
            if (queryText != null) {
                val requestStatus = searchJobsFromApi(queryText)
                handleRequestStatus(requestStatus)
            } else Log.d("Empty query text", queryText.toString())
        }
    }

    private fun handleRequestStatus(requestStatus: RequestStatus<List<JobVacancy>>) {
        when (requestStatus) {
            is RequestStatus.Success -> jobVacanciesLiveData.postValue(requestStatus.data)
            is RequestStatus.Error -> failedToListJobVacanciesLiveData.postValue(Unit)
        }
    }
}
package com.example.venturahr.presentation.main

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.JobVacancy
import com.example.venturahr.domain.usecases.ListJobVacanciesFromApi
import kotlinx.coroutines.launch

class MainViewModel(private val listJobVacanciesFromApi: ListJobVacanciesFromApi): ViewModel() {

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
    private fun handleRequestStatus(requestStatus: RequestStatus<List<JobVacancy>>) {
        when (requestStatus) {
            is RequestStatus.Success -> requestStatus.data
            is RequestStatus.Error -> failedToListJobVacanciesLiveData.postValue(Unit)
        }
    }
}
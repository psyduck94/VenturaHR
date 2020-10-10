package com.example.venturahr.presentation.splash

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.venturahr.domain.enums.FirstTimeState
import com.example.venturahr.domain.usecases.IsUserFirstTime
import com.example.venturahr.domain.usecases.SetItsNotTheUsersFirstTime

class SplashViewModel(
    private val isUserFirstTime: IsUserFirstTime,
    private val setItsNotTheUsersFirstTime: SetItsNotTheUsersFirstTime
) : ViewModel() {

    private val isItTheUsersFirstTimeLiveData = MutableLiveData<FirstTimeState>()
    val isItTheUsersFirstTime: LiveData<FirstTimeState> = isItTheUsersFirstTimeLiveData

    fun verifyIfItsTheUsersFirstTime() {
        val firstTime = isUserFirstTime()
        if (firstTime) isItTheUsersFirstTimeLiveData.postValue(FirstTimeState.FIRST_TIME)
        else isItTheUsersFirstTimeLiveData.postValue(FirstTimeState.NOT_THE_FIRST_TIME)
    }

    fun setNotTheUserFirstTime() = setItsNotTheUsersFirstTime()

}
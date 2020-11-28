package com.example.venturahr.presentation.splash

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.venturahr.domain.enums.FirstTimeState
import com.example.venturahr.domain.usecases.IsUserFirstTime
import com.example.venturahr.domain.usecases.SetItsNotTheUsersFirstTime
import com.google.firebase.auth.FirebaseAuth

class SplashViewModel(
    private val isUserFirstTime: IsUserFirstTime,
    private val setItsNotTheUsersFirstTime: SetItsNotTheUsersFirstTime,
    private val firebaseAuth: FirebaseAuth
) : ViewModel() {

    private val hasTheUserAlreadyLoggedInLiveData = MutableLiveData<Boolean>()
    val hasTheUserAlreadyLoggedIn: LiveData<Boolean> = hasTheUserAlreadyLoggedInLiveData

    fun checkIfUserHasAlreadyLoggedIn() {
        val user = firebaseAuth.currentUser
        val hasTheUserAlreadyLoggedIn = user != null
        hasTheUserAlreadyLoggedInLiveData.value = hasTheUserAlreadyLoggedIn
    }
}
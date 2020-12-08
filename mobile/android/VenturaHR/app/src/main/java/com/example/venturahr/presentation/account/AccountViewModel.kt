package com.example.venturahr.presentation.account

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.google.firebase.auth.FirebaseAuth

class AccountViewModel(private val firebaseAuth: FirebaseAuth) : ViewModel() {

    private val navigateToLoginLiveData = MutableLiveData<Unit>()
    val navigateToLogin: LiveData<Unit> = navigateToLoginLiveData

    fun signOut() {
        firebaseAuth.signOut()
        navigateToLoginLiveData.postValue(Unit)
    }
}
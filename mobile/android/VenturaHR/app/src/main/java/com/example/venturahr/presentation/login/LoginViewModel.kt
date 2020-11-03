package com.example.venturahr.presentation.login

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.venturahr.R

/* Classe controladora da tela de login */

class LoginViewModel : ViewModel() {

    val emailInput = MutableLiveData<String>()
    val passwordInput = MutableLiveData<String>()

    private val loginFormStatusLiveData = MutableLiveData<Int>()
    val loginFormStatus: LiveData<Int> = loginFormStatusLiveData

    fun signInWithEmailAndPassword() {
        val isLoginFormValid = checkIfLoginFormIsValid()
    }

    private fun checkIfLoginFormIsValid(): Boolean {
        return if (emailInput.value.isNullOrEmpty() && passwordInput.value.isNullOrEmpty()) {
            loginFormStatusLiveData.value = R.string.warning_invalid_form
            false
        } else true
    }

}
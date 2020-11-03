package com.example.venturahr.presentation.register

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.venturahr.R
import com.example.venturahr.domain.model.User

/* Classe controladora da tela de Cadastro */

class RegisterViewModel : ViewModel() {

    val accountTypeInput = MutableLiveData<String>()
    val nameInput = MutableLiveData<String>()
    val emailInput = MutableLiveData<String>()
    val passwordInput = MutableLiveData<String>()
    val phoneInput = MutableLiveData<String>()
    val cpfOrCnpjInput = MutableLiveData<String>()
    val stateInput = MutableLiveData<String>()

    private val statusMessageLiveData = MutableLiveData<Int>()
    val statusMessage: LiveData<Int> = statusMessageLiveData

    private fun isFormValid(): Boolean {
        return !(accountTypeInput.value != null &&
                nameInput.value.isNullOrEmpty() &&
                emailInput.value.isNullOrEmpty() &&
                passwordInput.value.isNullOrEmpty() &&
                phoneInput.value.isNullOrEmpty() &&
                cpfOrCnpjInput.value.isNullOrEmpty())
    }

    private fun createUser(): User {
        return User(
            accountType = accountTypeInput.value.toString(),
            name = nameInput.value.toString(),
            email = emailInput.value.toString(),
            password = passwordInput.value.toString(),
            phone = phoneInput.value.toString(),
            cpfOrCpnj = cpfOrCnpjInput.value.toString(),
            state = stateInput.value.toString()
        )
    }

    fun saveUserToRemoteDatabase() {
        if (isFormValid()) createUser()
        else statusMessageLiveData.value = R.string.warning_invalid_form
    }

}
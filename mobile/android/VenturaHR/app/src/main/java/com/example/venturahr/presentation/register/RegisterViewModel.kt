package com.example.venturahr.presentation.register

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.venturahr.domain.model.User

/* Classe controladora da tela de Cadastro */

class RegisterViewModel : ViewModel() {

    val accountTypeInput = MutableLiveData<String>()
    val nameInput = MutableLiveData<String>()
    val emailInput = MutableLiveData<String>()
    val passwordInput = MutableLiveData<String>()
    val phoneInput = MutableLiveData<String>()
    val cpfOrCnpjInput = MutableLiveData<String>()

    private val statusMessageLiveData = MutableLiveData<String>()
    val statusMessage: LiveData<String> = statusMessageLiveData

    private fun isFormValid(): Boolean {
        return !(accountTypeInput.value.isNullOrEmpty() &&
                nameInput.value.isNullOrEmpty() &&
                emailInput.value.isNullOrEmpty() &&
                passwordInput.value.isNullOrEmpty() &&
                phoneInput.value.isNullOrEmpty() &&
                cpfOrCnpjInput.value.isNullOrEmpty())
    }

}
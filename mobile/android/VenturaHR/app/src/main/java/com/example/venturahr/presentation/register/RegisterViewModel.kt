package com.example.venturahr.presentation.register

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.venturahr.R
import com.example.venturahr.domain.model.User
import com.example.venturahr.domain.usecases.SaveUserToRemoteDatabase
import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.launch

/* Classe controladora da tela de Cadastro */

class RegisterViewModel(
    private val saveUserToRemoteDatabase: SaveUserToRemoteDatabase,
    private val firebaseAuth: FirebaseAuth
) :
    ViewModel() {

    val nameInput = MutableLiveData<String>()
    val emailInput = MutableLiveData<String>()
    val passwordInput = MutableLiveData<String>()
    val phoneInput = MutableLiveData<String>()
    val cpfInput = MutableLiveData<String>()
    val stateInput = MutableLiveData<String>()
    val cityInput = MutableLiveData<String>()

    private val statusMessageLiveData = MutableLiveData<Int>()
    val statusMessage: LiveData<Int> = statusMessageLiveData

    private val navigateToMainPageLiveData = MutableLiveData<Unit>()
    val navigateToMainPage: LiveData<Unit> = navigateToMainPageLiveData

    private fun isFormValid(): Boolean {
        return !(nameInput.value.isNullOrEmpty() &&
                emailInput.value.isNullOrEmpty() &&
                passwordInput.value.isNullOrEmpty() &&
                phoneInput.value.isNullOrEmpty() &&
                cpfInput.value.isNullOrEmpty() &&
                cityInput.value.isNullOrEmpty())
    }

    private fun createUser(): User {
        return User(
            name = nameInput.value.toString(),
            email = emailInput.value.toString(),
            password = passwordInput.value.toString(),
            phone = phoneInput.value.toString(),
            cpf = cpfInput.value.toString(),
            state = stateInput.value.toString(),
            city = cityInput.value.toString()
        )
    }

    private fun createUserAuthentication(email: String, password: String) {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener {
                if (it.isSuccessful) {
                    logUserAuthState("User was authenticated successfuly")
                    navigateToMainPageLiveData.postValue(Unit)
                }
                else logUserAuthState(it.result.toString())
            }.addOnFailureListener {
                logUserAuthState(it.message.toString())
            }
    }

    fun saveUserToRemoteDb() {
        viewModelScope.launch {
            if (isFormValid()) {
                val user = createUser()
                createUserAuthentication(user.email, user.password)
                saveUserToRemoteDatabase(user)
            } else statusMessageLiveData.value = R.string.warning_invalid_form
        }
    }

    private fun logUserAuthState(message: String) {
        Log.d("User Authentication", message)
    }

}
package com.example.venturahr.domain.model

import com.example.venturahr.domain.enums.AccountType

data class User(
    val accountType: AccountType,
    val name: String,
    val email: String,
    val phone: String,
    val password: String,
    val state: String,
    val cpfOrCpnj: String
)

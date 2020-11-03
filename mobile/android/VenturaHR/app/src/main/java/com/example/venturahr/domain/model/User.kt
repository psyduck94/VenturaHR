package com.example.venturahr.domain.model

data class User(
    val accountType: String,
    val name: String,
    val email: String,
    val phone: String,
    val password: String,
    val state: String,
    val cpfOrCpnj: String
)

package com.example.venturahr.domain.model

data class User(
    val name: String,
    val email: String,
    val phone: String,
    val password: String,
    val state: String,
    val city: String,
    val cpf: String
)

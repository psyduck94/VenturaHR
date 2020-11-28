package com.example.venturahr.data.remote.model

import androidx.room.Entity

@Entity(tableName = "users")
data class UserResponse(
    val accountType: String = "candidate",
    val name: String,
    val email: String,
    val password: String,
    val phone: String,
    val cpf: String,
    val state: String,
    val city: String,
)
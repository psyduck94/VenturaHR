package com.example.venturahr.domain.repository

import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.User

interface UserRepository {
    suspend fun createUser(user: User): RequestStatus<String>
    suspend fun saveUserId(userId: String)
    suspend fun getUserId(): String
}
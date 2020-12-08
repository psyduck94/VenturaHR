package com.example.venturahr.domain.repository

import com.example.venturahr.domain.enums.RequestStatus
import com.example.venturahr.domain.model.User

interface UserRepository {
    suspend fun createUser(user: User): RequestStatus<String>
    suspend fun getUserId(email: String): String
    fun getApplyButtonState(jobVacancyId: String): Boolean
    fun setApplyButtonState(jobVacancyId: String, state: Boolean)
}
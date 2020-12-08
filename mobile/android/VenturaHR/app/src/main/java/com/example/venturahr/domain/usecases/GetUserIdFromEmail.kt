package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.UserRepository

class GetUserIdFromEmail(private val repository: UserRepository) {
    suspend operator fun invoke(email: String) = repository.getUserId(email)
}
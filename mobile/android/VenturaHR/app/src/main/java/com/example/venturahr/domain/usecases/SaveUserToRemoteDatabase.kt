package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.model.User
import com.example.venturahr.domain.repository.UserRepository

class SaveUserToRemoteDatabase(private val repository: UserRepository) {
    suspend operator fun invoke(user: User) = repository.createUser(user)
}
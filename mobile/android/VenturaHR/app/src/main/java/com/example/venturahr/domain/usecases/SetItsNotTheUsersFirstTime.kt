package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.UserFirstTimeRepository

class SetItsNotTheUsersFirstTime(private val repository: UserFirstTimeRepository) {
    operator fun invoke() = repository.setNotUserFirstTime()
}
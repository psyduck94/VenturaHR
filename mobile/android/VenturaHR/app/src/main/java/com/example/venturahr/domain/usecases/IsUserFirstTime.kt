package com.example.venturahr.domain.usecases

import com.example.venturahr.domain.repository.UserFirstTimeRepository

class IsUserFirstTime(private val repository: UserFirstTimeRepository) {
    operator fun invoke() = repository.isUserFirstTime()
}
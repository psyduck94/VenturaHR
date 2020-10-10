package com.example.venturahr.domain.repository

interface UserFirstTimeRepository {
    fun isUserFirstTime(): Boolean
    fun setNotUserFirstTime()
}
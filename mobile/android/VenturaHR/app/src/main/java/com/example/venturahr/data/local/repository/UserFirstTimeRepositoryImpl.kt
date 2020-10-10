package com.example.venturahr.data.local.repository

import com.example.venturahr.data.local.cache.UserFirstTimeCache
import com.example.venturahr.domain.repository.UserFirstTimeRepository

class UserFirstTimeRepositoryImpl(private val userFirstTimeCache: UserFirstTimeCache) :
    UserFirstTimeRepository {

    override fun isUserFirstTime() = userFirstTimeCache.isUserFirstTime()
    override fun setNotUserFirstTime() = userFirstTimeCache.setIsNotFirstTime()

}
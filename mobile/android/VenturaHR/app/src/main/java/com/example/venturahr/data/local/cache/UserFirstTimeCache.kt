package com.example.venturahr.data.local.cache

import android.content.SharedPreferences

class UserFirstTimeCache(private val sharedPreferences: SharedPreferences) {

    private companion object {
        const val IS_USER_FIRST_TIME = "IS_USER_FIRST_TIME"
        const val IS_USER_FIRST_TIME_DEFAULT = true
    }

    fun isUserFirstTime() =
        sharedPreferences.getBoolean(IS_USER_FIRST_TIME, IS_USER_FIRST_TIME_DEFAULT)

    fun setIsNotFirstTime() {
        val itsNotTheFirstTime = false
        val editor = sharedPreferences.edit()
        editor.putBoolean(IS_USER_FIRST_TIME, itsNotTheFirstTime)
        editor.apply()
    }

}
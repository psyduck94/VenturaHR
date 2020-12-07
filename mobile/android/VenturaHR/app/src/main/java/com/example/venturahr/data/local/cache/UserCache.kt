package com.example.venturahr.data.local.cache

import android.content.SharedPreferences

class UserCache(private val sharedPreferences: SharedPreferences) {
    private companion object {
        const val USER_ID_KEY = "USER_ID"
        const val DEFAULT_USER_ID = ""
    }

    fun saveUserId(userId: String) {
        val editor = sharedPreferences.edit()
        editor.putString(USER_ID_KEY, userId)
        editor.apply()
    }

    fun getUserId() = sharedPreferences.getString(USER_ID_KEY, DEFAULT_USER_ID)
}
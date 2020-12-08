package com.example.venturahr.data.local.cache

import android.content.SharedPreferences

class UserCache(private val sharedPreferences: SharedPreferences) {
    private companion object {
        const val USER_ID_KEY = "USER_ID"
        const val DEFAULT_USER_ID = ""
    }

    fun setApplyButtonState(jobVacancyId: String, state: Boolean) {
        val editor = sharedPreferences.edit()
        editor.putBoolean(jobVacancyId, state)
        editor.apply()
    }

    fun getApplyButtonState(jobVacancyId: String) = sharedPreferences.getBoolean(jobVacancyId, true)
}
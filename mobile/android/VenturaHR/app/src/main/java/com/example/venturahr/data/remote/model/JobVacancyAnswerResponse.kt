package com.example.venturahr.data.remote.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "job_vacancy_response")
data class JobVacancyAnswerResponse(
    @PrimaryKey
    val id: String,
    val candidate: String,
    val jobVacancy: String
)
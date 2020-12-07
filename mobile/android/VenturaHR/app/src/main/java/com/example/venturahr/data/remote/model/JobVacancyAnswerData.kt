package com.example.venturahr.data.remote.model

import androidx.room.Entity

@Entity(tableName = "job_vacancy_answer")
data class JobVacancyAnswerData(
    val candidate: String,
    val jobVacancy: String
)
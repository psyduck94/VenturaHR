package com.example.venturahr.data.remote.model

import androidx.room.Entity

@Entity(tableName = "criteria_answer")
data class CriteriaAnswerData(
    val selfEvaluation: Int,
    val criteria: String,
    val jobVacancyAnswer: String
)

package com.example.venturahr.data.remote.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "job_vacancies")
class JobVacancyResponse(
    @PrimaryKey
    val id: String,
    val title: String,
    val description: String,
    val companyLogo: String,
    val companyName: String,
    val city: String,
    val state: String,
    val contractType: String,
    val contractDuration: String,
    val criteriaList: List<String>
)
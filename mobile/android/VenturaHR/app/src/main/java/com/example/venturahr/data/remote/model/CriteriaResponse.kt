package com.example.venturahr.data.remote.model

import androidx.room.Entity

@Entity(tableName = "criteriaList")
data class CriteriaResponse(
    val id: String,
    val name: String,
    val pmd: Byte,
    val weight: Byte,
    val description: String
)
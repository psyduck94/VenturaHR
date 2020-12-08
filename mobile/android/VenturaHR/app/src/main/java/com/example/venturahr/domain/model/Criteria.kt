package com.example.venturahr.domain.model

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Criteria(
    val id: String,
    val name: String,
    val pmd: Byte,
    var selfEvaluation: Int? = 0,
    val weight: Byte,
    val description: String
) : Parcelable
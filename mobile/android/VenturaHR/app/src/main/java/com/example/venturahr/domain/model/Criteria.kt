package com.example.venturahr.domain.model

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Criteria(
    val id: String,
    val name: String,
    val pmd: Byte,
    val weight: Byte,
    val description: String
) : Parcelable
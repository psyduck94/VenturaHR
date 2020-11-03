package com.example.venturahr.domain.model

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
data class Address(
    val id: String,
    val country: String?,
    val state: String,
    val city: String,
    val streetName: String
) : Parcelable
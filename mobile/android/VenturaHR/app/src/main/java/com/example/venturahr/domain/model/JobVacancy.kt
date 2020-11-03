package com.example.venturahr.domain.model

import android.os.Parcelable
import kotlinx.android.parcel.Parcelize

@Parcelize
class JobVacancy(
    val id: String,
    val title: String,
    val description: String,
    val companyLogo: String,
    val companyName: String,
    val companyDescription: String,
    val address: Address,
    val contractType: String,
    val contractDuration: String,
    val closingDate: String,
    val criteriaList: List<Criteria>
) : Parcelable
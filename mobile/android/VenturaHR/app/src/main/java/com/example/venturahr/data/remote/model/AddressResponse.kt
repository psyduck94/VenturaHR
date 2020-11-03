package com.example.venturahr.data.remote.model

import androidx.room.Entity

@Entity(tableName = "addresses")
class AddressResponse(
    val id: String,
    val country: String?,
    val state: String,
    val city: String,
    val streetName: String
)
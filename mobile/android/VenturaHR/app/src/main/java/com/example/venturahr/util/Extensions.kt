package com.example.venturahr.util

import android.app.Activity
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager

/* Classe responsável por abstrair métodos bastante usados no projeto */

val <T> T.exhaustive: T
    get() = this

fun Fragment.defaultRecyclerViewLayout() = LinearLayoutManager(context, LinearLayoutManager.VERTICAL, false)

fun Fragment.toast(message: String, duration: Int = Toast.LENGTH_SHORT) {
    Toast.makeText(this.context, message, duration).show()
}

fun Activity.toast(message: String, duration: Int = Toast.LENGTH_SHORT) {
    Toast.makeText(this, message, duration).show()
}
package com.example.venturahr.presentation.splash

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.venturahr.R
import com.example.venturahr.presentation.main.MainActivity

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        startActivity(MainActivity.getIntent(this))
    }
}
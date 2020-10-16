package com.example.venturahr.presentation.intro

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.venturahr.R
import com.example.venturahr.presentation.home.HomeFragment
import com.example.venturahr.presentation.login.LoginActivity
import com.example.venturahr.presentation.main.MainActivity
import kotlinx.android.synthetic.main.activity_intro.*

/* Classe responsável pela UI da tela de introdução */

class IntroActivity : AppCompatActivity() {

    companion object {
        fun getIntent(context: Context) = Intent(context, IntroActivity::class.java)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_intro)

        btn_sign_up.setOnClickListener { startActivity(LoginActivity.getIntent(this)) }
        btn_no_thanks.setOnClickListener { startActivity(MainActivity.getIntent(this)) }
    }
}
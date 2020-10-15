package com.example.venturahr.presentation.intro

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.venturahr.R
import com.example.venturahr.presentation.home.HomeFragment
import com.example.venturahr.presentation.main.MainActivity
import kotlinx.android.synthetic.main.activity_intro.*

class IntroActivity : AppCompatActivity() {

    companion object {
        fun getIntent(context: Context) = Intent(context, IntroActivity::class.java)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_intro)

        btn_no_thanks.setOnClickListener { startActivity(MainActivity.getIntent(this)) }
    }
}
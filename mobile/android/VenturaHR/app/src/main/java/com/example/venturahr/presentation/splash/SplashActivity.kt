package com.example.venturahr.presentation.splash

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.Observer
import com.example.venturahr.presentation.login.LoginActivity
import com.example.venturahr.presentation.main.MainActivity
import kotlinx.android.synthetic.main.activity_job_vacancy_details.*
import org.koin.android.ext.android.inject

class SplashActivity : AppCompatActivity() {

    private val viewModel by inject<SplashViewModel>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        initViewModelObservers()

        viewModel.checkIfUserHasAlreadyLoggedIn()
    }

    private fun initViewModelObservers() {
        viewModel.apply {
            hasTheUserAlreadyLoggedIn.observe(this@SplashActivity, Observer {
                when (it) {
                    true -> startActivity(MainActivity.getIntent(this@SplashActivity))
                    false -> startActivity(LoginActivity.getIntent(this@SplashActivity))
                }
            })
        }

    }
}
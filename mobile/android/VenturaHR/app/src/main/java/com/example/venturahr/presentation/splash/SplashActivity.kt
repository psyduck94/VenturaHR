package com.example.venturahr.presentation.splash

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.Observer
import com.example.venturahr.domain.enums.FirstTimeState
import com.example.venturahr.presentation.intro.IntroActivity
import com.example.venturahr.presentation.main.MainActivity
import com.example.venturahr.util.exhaustive
import org.koin.android.ext.android.inject

class SplashActivity : AppCompatActivity() {

    private val viewModel by inject<SplashViewModel>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        initViewModelObservers()

        viewModel.verifyIfItsTheUsersFirstTime()
    }

    private fun initViewModelObservers() {
        viewModel.apply {
            isItTheUsersFirstTime.observe(this@SplashActivity, Observer { firstTimeState ->
                when (firstTimeState) {
                    FirstTimeState.FIRST_TIME -> {
                        setNotTheUserFirstTime()
                        startActivity(IntroActivity.getIntent(this@SplashActivity))
                    }
                    FirstTimeState.NOT_THE_FIRST_TIME -> {
                        startActivity(MainActivity.getIntent(this@SplashActivity))
                    }
                    else -> {}
                }
            })
        }
    }
}
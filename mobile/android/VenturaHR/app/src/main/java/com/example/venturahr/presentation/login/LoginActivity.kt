package com.example.venturahr.presentation.login

import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import com.example.venturahr.R
import com.example.venturahr.databinding.ActivityLoginBinding
import com.example.venturahr.presentation.register.RegisterActivity
import com.example.venturahr.util.toast
import org.koin.android.ext.android.inject

/* Classe responsável pela UI da tela de Login  */

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding
    private val viewModel by inject<LoginViewModel>()

    companion object {
        fun getIntent(context: Context) = Intent(context, LoginActivity::class.java)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        initBindingConfig()

        initViewModelObservers()
        binding.btnSignUp.setOnClickListener { startActivity(RegisterActivity.getIntent(this)) }
    }

    private fun initBindingConfig() {
        binding = DataBindingUtil.setContentView(this, R.layout.activity_login)
        binding.lifecycleOwner = this
        binding.viewModel = viewModel
    }

    private fun initViewModelObservers() {
        viewModel.apply {
            loginFormStatus.observe(this@LoginActivity, { stringResourceId ->
                toast(stringResourceId)
            })
        }
    }
}
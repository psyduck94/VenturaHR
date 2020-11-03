package com.example.venturahr.presentation.register

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import androidx.databinding.DataBindingUtil
import com.example.venturahr.R
import com.example.venturahr.databinding.ActivityLoginBinding
import com.example.venturahr.databinding.ActivityRegisterBinding
import kotlinx.android.synthetic.main.activity_register.*
import org.koin.android.ext.android.inject

class RegisterActivity : AppCompatActivity() {

    /* Classe responsável pela UI da tela de cadastro  */

    private lateinit var binding: ActivityRegisterBinding
    private val viewModel by inject<RegisterViewModel>()

    companion object {
        fun getIntent(context: Context) = Intent(context, RegisterActivity::class.java)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        initBindingConfig()

        initStatesSpinner()
        btn_confirm_form.setOnClickListener { viewModel.saveUserToRemoteDatabase() }
    }

    private fun initBindingConfig() {
        binding = DataBindingUtil.setContentView(this, R.layout.activity_register)
        binding.lifecycleOwner = this
        binding.viewModel = viewModel
    }

    private fun initStatesSpinner() {
        ArrayAdapter.createFromResource(
            this,
            R.array.brazilian_states,
            android.R.layout.simple_spinner_item
        ).also { adapter ->
            adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
            binding.statesSpinner.adapter = adapter
        }
    }

}
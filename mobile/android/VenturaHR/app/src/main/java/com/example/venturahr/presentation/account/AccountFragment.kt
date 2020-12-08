package com.example.venturahr.presentation.account

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.venturahr.R
import com.example.venturahr.presentation.login.LoginActivity
import kotlinx.android.synthetic.main.fragment_account.*
import org.koin.android.ext.android.inject

class AccountFragment : Fragment() {

    private val viewModel by inject<AccountViewModel>()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_account, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        btn_sign_out.setOnClickListener { viewModel.signOut() }

        initViewModelObservers()
    }

    private fun initViewModelObservers() {
        viewModel.apply {
            navigateToLogin.observe(viewLifecycleOwner, {
                startActivity(LoginActivity.getIntent(requireContext()))
                activity?.finish()
            })
        }
    }
}
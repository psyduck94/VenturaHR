package com.example.venturahr.presentation.job_vacancy_details

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.venturahr.presentation.job_vacancy_details.fragments.company.CompanyFragment
import com.example.venturahr.presentation.job_vacancy_details.fragments.details.DetailsFragment

class JobDetailsPagerAdapter(fragmentActivity: FragmentActivity): FragmentStateAdapter(fragmentActivity) {

    override fun getItemCount() = 2

    override fun createFragment(position: Int): Fragment {
        return when (position) {
            0 -> DetailsFragment.getInstance()
            1 -> CompanyFragment.getInstance()
            else -> DetailsFragment.getInstance()
        }
    }
}
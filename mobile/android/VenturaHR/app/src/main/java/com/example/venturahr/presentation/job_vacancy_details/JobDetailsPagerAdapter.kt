package com.example.venturahr.presentation.job_vacancy_details

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.venturahr.presentation.job_vacancy_details.fragments.company.CompanyFragment
import com.example.venturahr.presentation.job_vacancy_details.fragments.criteria.CriteriaFragment
import com.example.venturahr.presentation.job_vacancy_details.fragments.details.DetailsFragment

/* Classe responsável por realizar a paginação horizontal de detalhes de vaga e
* detalhes de empresa */

class JobDetailsPagerAdapter(fragmentActivity: FragmentActivity): FragmentStateAdapter(fragmentActivity) {

    override fun getItemCount() = 3

    override fun createFragment(position: Int): Fragment {
        return when (position) {
            0 -> DetailsFragment.getInstance()
            1 -> CompanyFragment.getInstance()
            2 -> CriteriaFragment.getInstance()
            else -> DetailsFragment.getInstance()
        }
    }
}
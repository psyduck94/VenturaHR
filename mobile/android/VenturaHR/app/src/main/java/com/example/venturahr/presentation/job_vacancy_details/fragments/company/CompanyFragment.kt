package com.example.venturahr.presentation.job_vacancy_details.fragments.company

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.venturahr.R
import com.example.venturahr.domain.model.JobVacancy
import kotlinx.android.synthetic.main.fragment_company.*

class CompanyFragment : Fragment() {

    companion object {
        fun getInstance() = CompanyFragment()
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_company, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setCompanyInfo()
    }

    private fun setCompanyInfo() {
        val jobVacancy = activity?.intent?.getParcelableExtra<JobVacancy>("JOB_VACANCY")
        jobVacancy?.let {
            company_description.text = jobVacancy.companyDescription
            contract_type.text = jobVacancy.contractType
            if (jobVacancy.contractDuration.isEmpty()) contract_duration.text = getString(R.string.empty_attribute)
            else contract_duration.text = jobVacancy.contractDuration
        }
    }

}
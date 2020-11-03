package com.example.venturahr.presentation.job_vacancy_details.fragments.details

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.venturahr.R
import com.example.venturahr.domain.model.JobVacancy
import kotlinx.android.synthetic.main.fragment_details.*
import org.koin.android.ext.android.inject

class DetailsFragment : Fragment() {

    private val viewModel by inject<DetailsViewModel>()

    companion object {
        fun getInstance() = DetailsFragment()
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_details, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setDetailsInfo()
    }

    private fun setDetailsInfo() {
        val jobVacancy = activity?.intent?.getParcelableExtra<JobVacancy>("JOB_VACANCY")
        jobVacancy?.let {
            job_description.text = jobVacancy.description
            if (jobVacancy.closingDate.isEmpty()) closing_date.text = getString(R.string.empty_attribute)
            else closing_date.text = viewModel.formatClosingDate(jobVacancy.closingDate)
        }
    }

}
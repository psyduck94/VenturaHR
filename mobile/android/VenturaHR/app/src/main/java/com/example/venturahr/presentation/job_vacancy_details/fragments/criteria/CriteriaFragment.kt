package com.example.venturahr.presentation.job_vacancy_details.fragments.criteria

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.venturahr.R
import com.example.venturahr.domain.model.Criteria
import com.example.venturahr.domain.model.JobVacancy
import com.example.venturahr.util.defaultRecyclerViewLayout
import com.example.venturahr.util.toast
import kotlinx.android.synthetic.main.fragment_criteria.*
import org.koin.android.ext.android.inject

class CriteriaFragment : Fragment() {

    companion object {
        fun getInstance() = CriteriaFragment()
    }

    private val criteriaAdapter by inject<CriteriaAdapter>()
    private val viewModel by inject<CriteriaViewModel>()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_criteria, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        initRecyclerView()
        viewModel.getButtonState(getJobVacancyIdFromIntent())

        btn_apply.setOnClickListener {
            val jobVacancyId = getJobVacancyIdFromIntent()
            viewModel.createJobVacancyAnswer(jobVacancyId, criteriaAdapter.getCriteriaList())
        }

        initViewModelObservers()
    }

    private fun initRecyclerView() {
        recycler_view_criteria_list.apply {
            setHasFixedSize(true)
            layoutManager = defaultRecyclerViewLayout()
            adapter = criteriaAdapter
        }
        val criteriaList = getCriteriaListFromIntent()
        criteriaList?.let { criteriaAdapter.updateCriteriaList(it) }
    }

    private fun getJobVacancyIdFromIntent(): String? {
        val jobVacancy = activity?.intent?.getParcelableExtra<JobVacancy>("JOB_VACANCY")
        return jobVacancy?.id
    }

    private fun getCriteriaListFromIntent(): List<Criteria>? {
        val jobVacancy = activity?.intent?.getParcelableExtra<JobVacancy>("JOB_VACANCY")
        return jobVacancy?.criteriaList
    }

    private fun initViewModelObservers() {
        viewModel.apply {
            isApplyButtonEnabled.observe(viewLifecycleOwner, {
                btn_apply.isEnabled = it
                when (btn_apply.isEnabled) {
                    true -> btn_apply.setTextColor(resources.getColor(R.color.background))
                    false -> btn_apply.setTextColor(resources.getColor(R.color.gray))
                }
            })
            jobAnswerCreatedSuccessfuly.observe(viewLifecycleOwner, {
                toast("Candidatura realizada com sucesso!")
            })
        }
    }
}
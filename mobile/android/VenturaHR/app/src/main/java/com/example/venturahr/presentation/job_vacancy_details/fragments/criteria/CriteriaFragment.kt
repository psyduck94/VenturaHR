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
import kotlinx.android.synthetic.main.fragment_criteria.*
import org.koin.android.ext.android.inject

class CriteriaFragment : Fragment() {

    companion object {
        fun getInstance() = CriteriaFragment()
    }

    private val criteriaAdapter by inject<CriteriaAdapter>()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_criteria, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        initRecyclerView()
    }

    private fun initRecyclerView() {
        recycler_view_criteria_list.apply {
            setHasFixedSize(true)
            layoutManager = defaultRecyclerViewLayout()
            adapter = criteriaAdapter
        }
        val criteriaList = getCriteraListFromIntent()
        criteriaList?.let { criteriaAdapter.updateCriteriaList(it) }

    }

    private fun getCriteraListFromIntent(): List<Criteria>? {
        val jobVacancy = activity?.intent?.getParcelableExtra<JobVacancy>("JOB_VACANCY")
        return jobVacancy?.criteriaList
    }
}
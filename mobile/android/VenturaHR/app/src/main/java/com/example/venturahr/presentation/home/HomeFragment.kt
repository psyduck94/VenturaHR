package com.example.venturahr.presentation.home

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import com.example.venturahr.R
import com.example.venturahr.util.defaultRecyclerViewLayout
import com.example.venturahr.util.toast
import kotlinx.android.synthetic.main.fragment_home.*
import org.koin.android.ext.android.inject

class HomeFragment : Fragment() {

    private val jobVacancyAdapter by inject<JobVacancyAdapter>()
    private val viewModel by inject<HomeViewModel>()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_home, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        initRecyclerView()
        initViewModelObservers()

        viewModel.fetchJobVacanciesFromApi()
    }

    private fun initRecyclerView() {
        recycler_view_latest_jobs.apply {
            setHasFixedSize(true)
            layoutManager = defaultRecyclerViewLayout()
            adapter = jobVacancyAdapter
        }
    }

    private fun initViewModelObservers() {
        viewModel.apply {
            jobVacancies.observe(viewLifecycleOwner, {
                jobVacancyAdapter.updateJobVacancyList(it)
            })
            failedToListJobVacancies.observe(viewLifecycleOwner, {
                toast(getString(R.string.warning_empty_job_vacancy_list))
            })
        }
    }
}
package com.example.venturahr.presentation.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.SearchView
import androidx.fragment.app.Fragment
import com.example.venturahr.R
import com.example.venturahr.domain.model.JobVacancy
import com.example.venturahr.presentation.job_vacancy_details.JobVacancyDetailsActivity
import com.example.venturahr.util.defaultRecyclerViewLayout
import com.example.venturahr.util.toast
import kotlinx.android.synthetic.main.fragment_home.*
import org.koin.android.ext.android.inject

class HomeFragment : Fragment(), JobVacancyAdapter.OnItemClickListener {

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

        setUpSearchView()

        search_jobs.setOnCloseListener {
            updateTitle(getString(R.string.title_recently_added))
            showLatestJobs()
        }

        viewModel.fetchJobVacanciesFromApi()
    }

    private fun initRecyclerView() {
        recycler_view_latest_jobs.apply {
            setHasFixedSize(true)
            layoutManager = defaultRecyclerViewLayout()
            adapter = jobVacancyAdapter
        }
        jobVacancyAdapter.setItemClickListener(this)
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

    override fun onJobVacancyClick(jobVacancy: JobVacancy) {
        startActivity(JobVacancyDetailsActivity.getIntent(this.requireContext(), jobVacancy))
    }

    private fun setUpSearchView() {
        search_jobs.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(newText: String?): Boolean {
                val title = getString(R.string.job_searching_title, newText)
                updateTitle(title)
                viewModel.searchJobs(newText)
                return false
            }

            override fun onQueryTextChange(query: String?): Boolean {
                val title = getString(R.string.job_searching_title, query)
                updateTitle(title)
                viewModel.searchJobs(query)
                return false
            }
        })
    }

    private fun updateTitle(title: String?) {
        title?.let { title_recently_added.text = title }
    }

    private fun showLatestJobs(): Boolean {
        val latestJobs = viewModel.jobVacancies.value
        latestJobs?.let { jobVacancyAdapter.updateJobVacancyList(it) }
        return true
    }
}
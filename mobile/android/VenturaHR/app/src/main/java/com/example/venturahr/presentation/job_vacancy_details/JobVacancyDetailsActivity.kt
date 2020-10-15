package com.example.venturahr.presentation.job_vacancy_details

import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.venturahr.R
import com.example.venturahr.domain.model.JobVacancy
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator
import com.squareup.picasso.Picasso
import kotlinx.android.synthetic.main.activity_job_vacancy_details.*

class JobVacancyDetailsActivity : AppCompatActivity() {

    companion object {
        private const val JOB_VACANCY = "JOB_VACANCY"
        fun getIntent(context: Context, jobVacancy: JobVacancy): Intent {
            val intent = Intent(context, JobVacancyDetailsActivity::class.java)
            intent.putExtra(JOB_VACANCY, jobVacancy)
            return intent
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_job_vacancy_details)

        setJobVacancyInfo()
        initJobDetailsPagerAdapter()
        initTabLayout()
    }

    private fun initTabLayout() {
        val tabLayoutMediator =
            TabLayoutMediator(tab_layout, viewPager2
            ) { tab, position ->
                when (position) {
                    0 -> tab.text = getString(R.string.tab_details)
                    1 -> tab.text = getString(R.string.tab_company)
                }
            }
        tabLayoutMediator.attach()
    }

    private fun initJobDetailsPagerAdapter() {
        viewPager2.adapter = JobDetailsPagerAdapter(this)
    }

    private fun setJobVacancyInfo() {
        val jobVacancy = intent.getParcelableExtra<JobVacancy>(JOB_VACANCY)
        jobVacancy?.let {
            Picasso.get().load(jobVacancy.companyLogo).into(img_company_logo)
            job_title.text = jobVacancy.title
            company_name.text = jobVacancy.companyName
            city.text = getString(R.string.format_city, jobVacancy.city)
            state.text = jobVacancy.state
        }
    }
}
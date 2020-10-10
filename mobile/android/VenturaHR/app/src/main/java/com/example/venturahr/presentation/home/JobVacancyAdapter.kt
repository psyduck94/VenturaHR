package com.example.venturahr.presentation.home

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.venturahr.R
import com.example.venturahr.domain.model.JobVacancy
import com.squareup.picasso.Picasso

class JobVacancyAdapter : RecyclerView.Adapter<JobVacancyAdapter.JobVacancyViewHolder>() {

    private val jobVacancyList = mutableListOf<JobVacancy>()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): JobVacancyViewHolder {
        val view =
            LayoutInflater.from(parent.context).inflate(R.layout.job_vacancy_item, parent, false)
        return JobVacancyViewHolder(view)
    }

    fun updateJobVacancyList(jobVacancyList: List<JobVacancy>) {
        if (this.jobVacancyList.isNotEmpty())
            this.jobVacancyList.clear()

        this.jobVacancyList.addAll(jobVacancyList)
        notifyDataSetChanged()
    }

    override fun onBindViewHolder(holder: JobVacancyViewHolder, position: Int) =
        holder.bind(jobVacancyList[position])

    override fun getItemCount() = jobVacancyList.size

    inner class JobVacancyViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val companyLogo = itemView.findViewById<ImageView>(R.id.company_logo)
        private val title = itemView.findViewById<TextView>(R.id.title)
        private val city = itemView.findViewById<TextView>(R.id.city)

        fun bind(jobVacancy: JobVacancy) {
            Picasso.get().load(jobVacancy.companyLogo).into(companyLogo)
            title.text = jobVacancy.title
            city.text = jobVacancy.city
        }

    }

}
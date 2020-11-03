package com.example.venturahr.presentation.job_vacancy_details.fragments.criteria

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.venturahr.R
import com.example.venturahr.domain.model.Criteria

class CriteriaAdapter: RecyclerView.Adapter<CriteriaAdapter.CriteriaViewHolder>() {

    private val criteriaList = mutableListOf<Criteria>()

    override fun onCreateViewHolder(
        parent: ViewGroup,
        viewType: Int
    ): CriteriaViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.criteria_item_layout, parent, false)
        return CriteriaViewHolder(view)
    }

    fun updateCriteriaList(criteriaList: List<Criteria>) {
        if (this.criteriaList.isNotEmpty())
            this.criteriaList.clear()

        this.criteriaList.addAll(criteriaList)
        notifyDataSetChanged()
    }

    override fun onBindViewHolder(holder: CriteriaViewHolder, position: Int) {
        holder.bind(criteriaList[position])
    }

    override fun getItemCount() = criteriaList.size

    class CriteriaViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
        private val name = itemView.findViewById<TextView>(R.id.name)
        private val description = itemView.findViewById<TextView>(R.id.description)

        fun bind(criteria: Criteria) {
            name.text = criteria.name
            description.text = criteria.description
        }
    }


}
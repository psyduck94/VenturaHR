package com.example.venturahr.presentation.job_vacancy_details.fragments.details

import androidx.lifecycle.ViewModel

class DetailsViewModel: ViewModel() {

    fun formatCriteriaList(criteriaList: List<String>): String {
        var result = ""
        for (criteria in criteriaList) {
            result += if (criteria == criteriaList.last()) "- $criteria"
            else "- $criteria\n"
        }
        return result
    }

    fun formatClosingDate(closingDate: String)
        = closingDate.removeRange(10, 24).split("-").reversed().joinToString("-")

}
package com.example.venturahr.data.remote.service

import com.example.venturahr.data.remote.model.JobVacancyResponse
import com.example.venturahr.domain.model.JobVacancy
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.POST

interface VenturaHrService {

    @GET("jobvacancies")
    suspend fun listJobVacancies(): Response<List<JobVacancyResponse>>

    @POST("jobvacancies")
    suspend fun createJobVacancy(jobVacancy: JobVacancy): Response<JobVacancy>
}
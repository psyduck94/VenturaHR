package com.example.venturahr.data.remote.service

import com.example.venturahr.data.remote.model.JobVacancyResponse
import com.example.venturahr.data.remote.model.UserResponse
import com.example.venturahr.domain.model.JobVacancy
import com.example.venturahr.domain.model.User
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

interface VenturaHrService {

    @POST("users")
    suspend fun createUser(@Body user: UserResponse): Response<UserResponse>

    @GET("jobvacancies")
    suspend fun listJobVacancies(): Response<List<JobVacancyResponse>>

    @POST("jobvacancies")
    suspend fun createJobVacancy(jobVacancy: JobVacancy): Response<JobVacancy>
}
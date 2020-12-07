package com.example.venturahr.data.remote.service

import com.example.venturahr.data.remote.model.*
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

interface VenturaHrService {

    @POST("users")
    suspend fun createUser(@Body user: UserResponse): Response<UserResponse>

    @GET("jobvacancies")
    suspend fun listJobVacancies(): Response<List<JobVacancyResponse>>

    @POST("job_vacancy_answers")
    suspend fun createJobVacancyAnswer(@Body jobVacancyAnswer: JobVacancyAnswerData): Response<JobVacancyAnswerResponse>

    @POST("criteriaListAnswer")
    suspend fun createCriteriaAnswer(@Body criteriaAnswerData: List<CriteriaAnswerData>): Response<CriteriaAnswerData>

    @GET("search")
    suspend fun searchJobs(@Query("query") textQuery: String): Response<List<JobVacancyResponse>>
}
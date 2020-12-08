package com.example.venturahr.data.remote.service

import com.example.venturahr.data.remote.model.*
import retrofit2.Response
import retrofit2.http.*

interface VenturaHrService {

    @POST("users")
    suspend fun createUser(@Body user: UserResponse): Response<UserResponse>

    @GET("jobvacancies")
    suspend fun listJobVacancies(): Response<List<JobVacancyResponse>>

    @POST("job_vacancy_answers")
    suspend fun createJobVacancyAnswer(@Body jobVacancyAnswer: JobVacancyAnswerData): Response<JobVacancyAnswerResponse>

    @POST("criteriaListAnswer")
    suspend fun createCriteriaAnswer(@Body criteriaAnswerData: CriteriaAnswerData): Response<CriteriaAnswerData>

    @GET("users/email/{email}")
    suspend fun getUserIdByEmail(@Path("email") email: String): Response<String>

    @GET("search")
    suspend fun searchJobs(@Query("query") textQuery: String): Response<List<JobVacancyResponse>>
}
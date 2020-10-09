package com.example.venturahr.di

import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.data.remote.repository.JobVacancyRepositoryImpl
import com.example.venturahr.domain.repository.JobVacancyRepository
import com.example.venturahr.domain.usecases.ListJobVacanciesFromApi
import com.example.venturahr.presentation.main.MainViewModel
import org.koin.android.viewmodel.dsl.viewModel
import org.koin.dsl.module
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

private const val VENTURAHR_BASE_URL = "http://192.168.1.11:3333/"

@Suppress("RemoveExplicitTypeArguments", "USELESS_CAST")
val appModule = module {

    viewModel {
        MainViewModel(get())
    }

    factory { ListJobVacanciesFromApi(get()) }

    factory {
        JobVacancyRepositoryImpl(
            get<VenturaHrService>()
        ) as JobVacancyRepository
    }

    factory {
        getJobVacancyService(
            get<Retrofit>()
        )
    }

    factory { createVenturaRetrofit() }

}

private fun createVenturaRetrofit() = Retrofit.Builder()
    .baseUrl(VENTURAHR_BASE_URL)
    .addConverterFactory(MoshiConverterFactory.create())
    .build()

private fun getJobVacancyService(retrofit: Retrofit): VenturaHrService =
    retrofit.create(VenturaHrService::class.java)
package com.example.venturahr.di

import android.content.Context
import android.preference.PreferenceManager
import com.example.venturahr.data.local.cache.UserFirstTimeCache
import com.example.venturahr.data.local.repository.UserFirstTimeRepositoryImpl
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.data.remote.repository.JobVacancyRepositoryImpl
import com.example.venturahr.domain.repository.JobVacancyRepository
import com.example.venturahr.domain.repository.UserFirstTimeRepository
import com.example.venturahr.domain.usecases.IsUserFirstTime
import com.example.venturahr.domain.usecases.ListJobVacanciesFromApi
import com.example.venturahr.domain.usecases.SetItsNotTheUsersFirstTime
import com.example.venturahr.presentation.account.AccountViewModel
import com.example.venturahr.presentation.bookmarks.BookmarksViewModel
import com.example.venturahr.presentation.home.HomeViewModel
import com.example.venturahr.presentation.home.JobVacancyAdapter
import com.example.venturahr.presentation.intro.IntroViewModel
import com.example.venturahr.presentation.job_vacancy_details.JobVacancyDetailsActivity
import com.example.venturahr.presentation.job_vacancy_details.JobVacancyDetailsViewModel
import com.example.venturahr.presentation.job_vacancy_details.fragments.details.DetailsViewModel
import com.example.venturahr.presentation.login.LoginViewModel
import com.example.venturahr.presentation.main.MainViewModel
import com.example.venturahr.presentation.register.RegisterViewModel
import com.example.venturahr.presentation.splash.SplashViewModel
import org.koin.android.ext.koin.androidContext
import org.koin.android.viewmodel.dsl.viewModel
import org.koin.dsl.module
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

private const val VENTURAHR_BASE_URL = "http://192.168.1.11:3333/"

/* Arquivo responsável por configurar injeções de dependências */

@Suppress("RemoveExplicitTypeArguments", "USELESS_CAST")
val appModule = module {

    viewModel {
        SplashViewModel(
            get<IsUserFirstTime>(),
            get<SetItsNotTheUsersFirstTime>()
        )
    }

    viewModel {
        JobVacancyDetailsViewModel()
    }

    viewModel {
        DetailsViewModel()
    }

    viewModel {
        LoginViewModel()
    }

    viewModel {
        RegisterViewModel()
    }

    factory { JobVacancyAdapter() }

    viewModel { IntroViewModel() }

    viewModel { HomeViewModel(get()) }

    viewModel { BookmarksViewModel() }

    viewModel { AccountViewModel() }

    viewModel { MainViewModel() }

    factory { IsUserFirstTime(get()) }

    factory { SetItsNotTheUsersFirstTime(get()) }

    factory { ListJobVacanciesFromApi(get()) }

    factory {
        UserFirstTimeRepositoryImpl(
            get<UserFirstTimeCache>()
        ) as UserFirstTimeRepository
    }

    factory { UserFirstTimeCache(getSharedPreferences(androidContext())) }

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

private fun getSharedPreferences(context: Context) =
    PreferenceManager.getDefaultSharedPreferences(context)

private fun createVenturaRetrofit() = Retrofit.Builder()
    .baseUrl(VENTURAHR_BASE_URL)
    .addConverterFactory(MoshiConverterFactory.create())
    .build()

private fun getJobVacancyService(retrofit: Retrofit): VenturaHrService =
    retrofit.create(VenturaHrService::class.java)
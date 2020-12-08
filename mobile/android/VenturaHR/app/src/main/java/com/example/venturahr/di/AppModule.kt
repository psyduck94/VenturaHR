package com.example.venturahr.di

import android.content.Context
import android.preference.PreferenceManager
import com.example.venturahr.data.local.cache.UserCache
import com.example.venturahr.data.local.cache.UserFirstTimeCache
import com.example.venturahr.data.local.repository.UserFirstTimeRepositoryImpl
import com.example.venturahr.data.remote.repository.CriteriaAnswerRepositoryImpl
import com.example.venturahr.data.remote.repository.JobVacancyAnswerRepositoryImpl
import com.example.venturahr.data.remote.service.VenturaHrService
import com.example.venturahr.data.remote.repository.JobVacancyRepositoryImpl
import com.example.venturahr.data.remote.repository.UserRepositoryImpl
import com.example.venturahr.domain.repository.*
import com.example.venturahr.domain.usecases.*
import com.example.venturahr.presentation.account.AccountViewModel
import com.example.venturahr.presentation.bookmarks.BookmarksViewModel
import com.example.venturahr.presentation.home.HomeViewModel
import com.example.venturahr.presentation.home.JobVacancyAdapter
import com.example.venturahr.presentation.job_vacancy_details.JobVacancyDetailsViewModel
import com.example.venturahr.presentation.job_vacancy_details.fragments.criteria.CriteriaAdapter
import com.example.venturahr.presentation.job_vacancy_details.fragments.criteria.CriteriaViewModel
import com.example.venturahr.presentation.job_vacancy_details.fragments.details.DetailsViewModel
import com.example.venturahr.presentation.login.LoginViewModel
import com.example.venturahr.presentation.main.MainViewModel
import com.example.venturahr.presentation.register.RegisterViewModel
import com.example.venturahr.presentation.splash.SplashViewModel
import com.google.firebase.auth.FirebaseAuth
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
            get<SetItsNotTheUsersFirstTime>(),
            FirebaseAuth.getInstance()
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
        CriteriaViewModel(get(), get(), get(), get(), get(), FirebaseAuth . getInstance ())
    }

    viewModel {
        RegisterViewModel(
            get<SaveUserToRemoteDatabase>(),
            FirebaseAuth.getInstance()
        )
    }

    factory { CriteriaAdapter() }

    factory { JobVacancyAdapter() }

    viewModel { HomeViewModel(get(), get()) }

    viewModel { BookmarksViewModel() }

    viewModel { AccountViewModel(FirebaseAuth.getInstance()) }

    viewModel { MainViewModel() }

    factory { SetApplyButtonState(get()) }

    factory { GetApplyButtonState(get()) }

    factory { GetUserIdFromEmail(get()) }

    factory { SearchJobsFromApi(get()) }

    factory { SaveCriteriaAnswerToRemoteApi(get()) }

    factory { SaveJobVacancyAnswerToApi(get()) }

    factory { SaveUserToRemoteDatabase(get()) }

    factory { IsUserFirstTime(get()) }

    factory { SetItsNotTheUsersFirstTime(get()) }

    factory { ListJobVacanciesFromApi(get()) }

    factory {
        UserFirstTimeRepositoryImpl(
            get<UserFirstTimeCache>()
        ) as UserFirstTimeRepository
    }

    factory {
        JobVacancyAnswerRepositoryImpl(
            get<VenturaHrService>()
        ) as JobVacancyAnswerRepository
    }

    factory {
        UserRepositoryImpl(
            get<VenturaHrService>(),
            get<UserCache>()
        ) as UserRepository
    }

    factory {
        CriteriaAnswerRepositoryImpl(
            get<VenturaHrService>()
        ) as CriteriaAnswerRepository
    }

    factory { UserFirstTimeCache(getSharedPreferences(androidContext())) }

    factory { UserCache(getSharedPreferences(androidContext())) }

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
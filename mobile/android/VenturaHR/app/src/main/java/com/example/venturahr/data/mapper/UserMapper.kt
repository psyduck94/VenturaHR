package com.example.venturahr.data.mapper

import com.example.venturahr.data.remote.model.UserResponse
import com.example.venturahr.domain.model.User

class UserMapper {
    companion object {
        fun mapDomainToResponse(user: User): UserResponse {
            return UserResponse(
                name = user.name,
                email = user.email,
                password = user.password,
                phone = user.phone,
                cpf = user.cpf,
                city = user.city,
                state = user.state,
            )
        }
    }
}
/* Arquivo de contexto para a autenticação do sistema */

import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface AuthState {
    token: string
    user: object
}

interface SignInCredentials {
    email: string
    password: string
}

interface AuthContextData {
    user: object
    signIn(credentials: SignInCredentials): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@VenturaHR:token')
        const user = localStorage.getItem('@VenturaHR:user')

        if (token && user) return { token, user: JSON.parse(user) }

        return {} as AuthState
    })

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email, password
        })
        const { token, user } = response.data

        localStorage.setItem('@VenturaHR:token', token)
        localStorage.setItem('@VenturaHR:user', JSON.stringify(user))

        setData({ token, user })
    }, [])

    return (
        <AuthContext.Provider value={{ user: data.user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used inside AuthProvider')
    return context
}

export { AuthProvider, useAuth }

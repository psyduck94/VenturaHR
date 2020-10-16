import React, { useState, useEffect } from 'react'
import logo from '../../assets/app_logo.jpg'
import { FiLogIn } from 'react-icons/fi'
import {
    Container,
    Content,
    Background
} from './styles'

/* Classe responsável pela UI da página de Login */

const Login: React.FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <img src={logo} alt="Logo da Empresa" width="150" />
                    <form>
                        <h2>Faça seu login</h2>
                        <input placeholder="E-mail" />
                        <input placeholder="Senha" type="password" />
                        <button type="submit">Entrar</button>
                        <a href="forgot">Esqueci minha senha</a>
                    </form>
                    <a href="">
                        <FiLogIn />
                        Criar conta
                    </a>
                </Content>
                <Background />
            </Container>
        </>
    )
}

export default Login

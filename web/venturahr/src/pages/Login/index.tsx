import React from 'react'
import logo from '../../assets/app_logo.jpg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import {
    Container,
    Content,
    Background
} from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Form } from '@unform/web'

/* Classe responsável pela UI da página de Login */

const Login: React.FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <img src={logo} alt="Logo da Empresa" width="150" />
                    <Form>
                        <h2>Faça seu login</h2>
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input name="password"  icon={FiLock} placeholder="Senha" type="password" />
                        <Button type="submit">Entrar</Button>
                        <a href="forgot">Esqueci minha senha</a>
                    </Form>
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

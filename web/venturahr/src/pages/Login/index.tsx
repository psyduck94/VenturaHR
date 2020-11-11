/* Classe responsável pela UI da página de Login */

import React, { useRef, useCallback, useContext } from 'react'
import * as Yup from 'yup'
import logo from '../../assets/app_logo.jpg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import {
    Container,
    Content,
    Background,
    AnimationContainer
} from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import getValidationErrors from '../../utils/getValidationErrors'
import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'
import { Link } from 'react-router-dom'

interface SignInFormData {
    email: string,
    password: string
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const { user, signIn } = useAuth()
    const { addToast } = useToast()

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatório'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            await signIn({ email: data.email, password: data.password })
        } catch (err) {

            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)
                formRef.current?.setErrors(errors)
                return
            }
            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Erro ao fazer login, verifique as credencias novamente. '
            })
        }
    }, [signIn, addToast])

    return (
        <>
            <Container>
                <Content>
                    <AnimationContainer>
                        <img src={logo} alt="Logo da Empresa" width="150" />
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <h2>Faça seu login</h2>
                            <Input name="email" icon={FiMail} placeholder="E-mail" />
                            <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
                            <Button type="submit">Entrar</Button>
                            <a href="forgot">Esqueci minha senha</a>
                        </Form>

                        <Link to="/cadastro">
                            <FiLogIn />
                            Criar conta
                        </Link>

                    </AnimationContainer>
                </Content>
                <Background />
            </Container>
        </>
    )
}

export default Login

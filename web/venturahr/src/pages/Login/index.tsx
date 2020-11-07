import React, { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import logo from '../../assets/app_logo.jpg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import {
    Container,
    Content,
    Background
} from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import getValidationErrors from '../../utils/getValidationErrors'

/* Classe responsável pela UI da página de Login */

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatório'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors)
        }
    }, [])

    return (
        <>
            <Container>
                <Content>
                    <img src={logo} alt="Logo da Empresa" width="150" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h2>Faça seu login</h2>
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
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

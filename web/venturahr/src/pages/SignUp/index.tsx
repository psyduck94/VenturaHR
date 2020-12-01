/* Classe responsável pela UI da página de Login */

import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import logo from '../../assets/app_logo.jpg'
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone, FiCreditCard, FiImage, FiAlignJustify} from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import {
    Container,
    Content,
    AnimationContainer,
    Background,
} from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'
import { useToast } from '../../hooks/toast'
import SignUpFormData from '../../utils/SignUpFormData'
import UserFactory from '../../factory/UserFactory'

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const { addToast } = useToast()
    const history = useHistory()

    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatório').min(6, 'Mínimo de 6 dígitos'),
                cnpj: Yup.string().required('CNPJ obrigatório').min(14, 'Mínimo de 14 dígitos'),
                phone: Yup.string().required('Telefone obrigatório').min(8, 'Mínimo de 8 Dígitos'),
                city: Yup.string().required('Cidade Obrigatório'),
                state: Yup.string().required('Estado obrigatório'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            data.accountType = 'company'

            console.log(data)
            await api.post('/users', data)

            addToast({
                type: 'success',
                title: 'Cadastro realizado com sucesso',
                description: 'Você já pode fazer seu login no VenturaHR!'
            })

            history.push('/login')

        } catch (err) {
            if (err instanceof TypeError) console.log(err)
            else {
                const errors = getValidationErrors(err)
                formRef.current?.setErrors(errors)
                console.log(err.message)

                addToast({
                    type: 'error',
                    title: 'Erro no cadastro',
                    description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
                })
            }
        }
    }, [addToast, history])

    return (
        <>
            <Container>
                <Background />
                <Content>
                    <AnimationContainer>
                        <img src={logo} alt="Logo da Empresa" width="150" />
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <h2>Faça seu cadastro</h2>
                            <Input name="name" icon={FiUser} placeholder="Nome da Empresa" />
                            <Input name="email" icon={FiMail} placeholder="E-mail" />
                            <Input name="companyDescription" icon={FiAlignJustify} placeholder="Descrição da Empresa" />
                            <Input name="companyLogo" icon={FiImage} placeholder="Logo da Empresa" />
                            <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
                            <Input name="cnpj" icon={FiCreditCard} placeholder="CNPJ" />
                            <Input name="phone" icon={FiPhone} placeholder="Telefone" />
                            <Input name="city" icon={MdLocationOn} placeholder="Cidade" />
                            <Input name="state" icon={MdLocationOn} placeholder="Estado" />
                            <Button type="submit">Cadastrar</Button>
                        </Form>
                        <Link to="/">
                            <FiArrowLeft />
                        Voltar para a página principal
                    </Link>
                    </AnimationContainer>
                </Content>
            </Container>
        </>
    )
}

export default SignUp

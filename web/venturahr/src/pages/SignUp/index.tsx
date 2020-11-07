import React, { useState, useEffect } from 'react'
import logo from '../../assets/app_logo.jpg'
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone, FiCreditCard } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import {
    Container,
    Content,
    Background
} from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'

/* Classe responsável pela UI da página de Login */

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        console.log(data)
    }

    return (
        <>
            <Container>
            <Background />
                <Content>
                    <img src={logo} alt="Logo da Empresa" width="150" />
                    <Form onSubmit={handleSubmit}>
                        <h2>Faça seu cadastro</h2>
                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
                        <Input name="cpfOrCpnj" icon={FiCreditCard} placeholder="CPF ou CPNJ" />
                        <Input name="phone" icon={FiPhone} placeholder="Telefone" />
                        <Input name="city" icon={MdLocationOn} placeholder="Cidade" />
                        <Input name="state" icon={MdLocationOn} placeholder="Estado" />
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para a página principal
                    </Link>
                </Content>
            </Container>
        </>
    )
}

export default SignUp

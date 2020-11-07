import React, { useCallback, useRef } from 'react'
import { FormHandles} from '@unform/core'
import logo from '../../assets/app_logo.jpg'
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone, FiCreditCard } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import {
    Container,
    Content,
    Background,
    RadioGroup,
} from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

/* Classe responsável pela UI da página de Login */

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatório').min(6, 'Mínimo de 6 dígitos'),
                cpfOrCnpj: Yup.string().required('CPF ou CPNJ obrigatório').min(11, 'Mínimo de 11 dígitos'),
                phone: Yup.string().required('Telefone obrigatório').min(8, 'Mínimo de 8 Dígitos'),
                city: Yup.string().required('Cidade Obrigatório'),
                state: Yup.string().required('Estado obrigatório'),
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
                <Background />
                <Content>
                    <img src={logo} alt="Logo da Empresa" width="150" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h2>Faça seu cadastro</h2>
                        <RadioGroup>
                            <input type="radio" value="Empresa" name="accountType" /> Empresa
                            <input checked type="radio" value="Candidato" name="accountType" /> Candidato
                        </RadioGroup>

                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
                        <Input name="cpfOrCnpj" icon={FiCreditCard} placeholder="CPF ou CPNJ" />
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

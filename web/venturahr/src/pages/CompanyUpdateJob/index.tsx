import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container } from './styles'

interface JobVacancyFormData {
    title: string
    description: string
    contractType: string
    address: string
    company: string
    companyLogo: string
    companyName: string
    contractDuration: string
    closingDate: string
}

const CompanyUpdateJob: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const history = useHistory()

    const handleSubmit = () => {

    }

    return (
        <>
            <Container>
                <h1>Atualizar Vaga</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="title" placeholder="Título da Vaga" />
                    <Input name="description" placeholder="Descrição da vaga" />
                    <Input name="contractType" placeholder="Tipo de Contrato" />
                    <Input name="contractDuration" placeholder="Duração de Contrato" />
                    <Input name="closingDate" placeholder="Data de Fechamento" />
                </Form>
                <Button type="submit">Atualizar</Button>
            </Container>
        </>
    )
}

export default CompanyUpdateJob

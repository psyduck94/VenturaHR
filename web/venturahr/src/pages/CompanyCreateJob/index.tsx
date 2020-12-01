import { FormHandles } from '@unform/core'
import React, { useCallback, useRef, useState } from 'react'
import Input from '../../components/Input'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import User from '../../utils/User'
import { useToast } from '../../hooks/toast'
import api from '../../services/api'
import Button from '../../components/Button'
import { Container } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'
import { FiXCircle } from 'react-icons/fi'
import { RiAddCircleLine } from 'react-icons/ri'

interface JobVacancyFormData {
    title: string
    description: string
    contractType: string
    city: string
    address: string
    state: string
    company: string
    companyLogo: string
    companyName: string
    criteriaTitle: string
    criteriaDescription: string
    companyDescription: string
    contractDuration: string
    closingDate: string
}

interface CriteriaFormData {
    jobVacancy: string
    name: string
    description: string
    weight: string
    pmd: string
}


const numbers = [1, 2, 3, 4, 5]

const CompanyCreateJob: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const [criteriaInputFields, setCriteriaInputFields] = useState<CriteriaFormData[]>([{
        jobVacancy: '', name: '', description: '', pmd: '0', weight: '0',
    }])
    const { addToast } = useToast()
    const [company] = useState<User>(() => {
        const user = localStorage.getItem('@VenturaHR:user')
        if (user) return JSON.parse(user)
    })

    const handleAddFields = () => {
        setCriteriaInputFields([...criteriaInputFields, { jobVacancy: '', name: '', pmd: '0', weight: '0', description: '' }])
    }

    const handleRemoveFields = (index: number) => {
        const values = [...criteriaInputFields]
        values.splice(index, 1)
        setCriteriaInputFields(values)
    }

    const handleChangeInput = (index: number, name: keyof CriteriaFormData, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...criteriaInputFields]
        values[index][name] = event.target.value
        setCriteriaInputFields(values)
    }

    const handleSubmit = useCallback(async (data: JobVacancyFormData) => {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('Título obrigatório'),
                description: Yup.string().required('Descrição de vaga obrigatório'),
                contractType: Yup.string().required('Tipo de contrato obrigatório'),
                closingDate: Yup.string().required('Data de Fechamento obrigatório'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            data.company = company.id
            data.companyName = company.name
            data.companyDescription = company.companyDescription
            data.companyLogo = company.companyLogo
            data.address = "f8b4063f-3e56-42eb-ba3f-c2c64488c426"

            const jobVacancy = await api.post('/jobvacancies', data)
            console.log('criteriaInputFields', criteriaInputFields)

            for (let criteria of criteriaInputFields) {
                const pmd = Number(criteria.pmd)
                const weight = Number(criteria.weight)
                const criteriaTemp = {
                    jobVacancy: jobVacancy.data.id,
                    name: criteria.name,
                    description: criteria.description,
                    pmd: pmd,
                    weight: weight,
                }
                await api.post('/criteriaList', criteriaTemp)
            }



        } catch (err) {
            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors)

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
            })
        }
    }, [addToast])


    return (
        <>
            <Container>
                <h1>Cadastrar Nova Vaga</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="title" placeholder="Título da Vaga" />
                    <Input name="description" placeholder="Descrição da vaga" />
                    <Input name="contractType" placeholder="Tipo de Contrato" />
                    <Input name="contractDuration" placeholder="Duração de Contrato" />
                    <Input name="closingDate" placeholder="Data de Fechamento" />

                    <h1>Critérios</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>PMD</th>
                                <th>Peso</th>
                            </tr>
                            {criteriaInputFields.map((inputField, index) => (
                                <tr>
                                    <>
                                        <td><Input name="criteriaTitle"
                                            placeholder="Título"
                                            value={inputField.name}
                                            onChange={event => handleChangeInput(index, 'name', event)}
                                        /></td>
                                        <td className="description"><Input name="criteriaDescription"
                                            placeholder="Descrição"
                                            value={inputField.description}
                                            onChange={event => handleChangeInput(index, 'description', event)}
                                        /></td>
                                        <td>
                                            <select name="pmd">
                                                {numbers.map(number => (
                                                    <option>{number}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <select name="weight">
                                                {numbers.map(number => (
                                                    <option>{number}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <div>
                                            <FiXCircle size={30} onClick={() => handleRemoveFields(index)} />
                                            <RiAddCircleLine size={31} onClick={handleAddFields} />
                                        </div>
                                    </>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Container>
        </>
    )
}

export default CompanyCreateJob

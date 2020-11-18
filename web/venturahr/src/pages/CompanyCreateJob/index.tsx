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

}

const numbers = [1, 2, 3, 4, 5]

const CompanyCreateJob: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const [criteriaInputFields, setCriteriaInputFields] = useState([
        { name: 'Kotlin', pmd: 3, weight: 5, description: 'Saber Kotlin' },
    ])
    const { addToast } = useToast()
    const [company] = useState<User>(() => {
        const user = localStorage.getItem('@VenturaHR:user')
        if (user) return JSON.parse(user)
    })

    const handleAddFields = () => {
        setCriteriaInputFields([...criteriaInputFields, {name: '', pmd: 0, weight: 0, description: ''}])
    }

    const handleRemoveFields = (index: number) => {
        const values = [...criteriaInputFields]
        values.splice(index, 1)
        setCriteriaInputFields(values)
    }

    const handleSubmit = useCallback(async (data: JobVacancyFormData) => {
        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('Título obrigatório'),
                description: Yup.string().required('Descrição obrigatório'),
                contractType: Yup.string().required('Tipo de contrato obrigatório'),
                closingDate: Yup.string().required('Data de Fechamento obrigatório'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            await api.post('/jobvacancies', data)

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
                    <Input name="description" placeholder="Descrição" />
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
                                        <td><Input name="title" placeholder="Título" /></td>
                                        <td className="description"><Input name="description" placeholder="Descrição" /></td>
                                        <td>
                                            <select>
                                                {numbers.map(number => (
                                                    <option>{number}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                {numbers.map(number => (
                                                    <option>{number}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <FiXCircle size={30} onClick={() => handleRemoveFields(index)} />
                                        <RiAddCircleLine size={31} onClick={handleAddFields}  />
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

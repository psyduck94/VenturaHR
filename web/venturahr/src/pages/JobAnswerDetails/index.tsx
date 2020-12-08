import React, { useState, useEffect } from 'react'
import { CandidateContainer, Header } from './styles'
import logo from '../../assets/venturahrlogo.jpg'
import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import User from '../../utils/User'
import api from '../../services/api'

interface JobVacancyParams {
    id: string
}

interface Address {
    country?: string
    state: string
    city: string
    streetName: string
}

interface JobVacancy {
    id: string
    title: string
    companyName: string
    companyLogo: string
    address: Address
}

interface Criteria {
    name: string
    description: string
    pmd: number
    weight: number
}

interface CriteriaAnswer {
    selfEvaluation: number
    criteria: Criteria
}

interface JobVacancyAnswer {
    id: string
    candidate: User
    jobVacancy: JobVacancy
    criteriaListAnswer: CriteriaAnswer[]
}

const JobAnswerDetails: React.FC = () => {
    const [jobVacancyAnswer, setJobVacancyAnswer] = useState<JobVacancyAnswer | null>(null)
    const { params } = useRouteMatch<JobVacancyParams>()

    useEffect(() => {
        api.get(`job_vacancy_answers/${params.id}`).then((response) => {
            setJobVacancyAnswer(response.data)
        })
    }, [params.id])


    return (
        <>
            <Header>
                <img src={logo} alt="Logo da Empresa" width="80"></img>
                <Link to="/">
                    <FiChevronLeft size={16}></FiChevronLeft>
                Voltar
            </Link>
            </Header>

            { jobVacancyAnswer ? (
                <>
                    <CandidateContainer>
                        <h1>Candidato</h1>

                        <h2>Nome: <span>{jobVacancyAnswer.candidate.name}</span></h2>
                        <h2>E-mail: <span>{jobVacancyAnswer.candidate.email}</span></h2>
                        <h2>Telefone: <span>{jobVacancyAnswer.candidate.phone}</span></h2>
                        <h2>CPF: <span>{jobVacancyAnswer.candidate.cpf}</span> </h2>
                        <h2>Cidade: <span>{jobVacancyAnswer.candidate.city}</span></h2>
                        <h2>Estado: <span>{jobVacancyAnswer.candidate.state}</span></h2>

                        <h1>Resposta de Critérios</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>PMD</th>
                                    <th>Peso</th>
                                    <th>Auto Avaliação do Candidato</th>
                                </tr>
                                <tr>
                                    {jobVacancyAnswer.criteriaListAnswer.map(criteriaAnswer => (
                                        <>
                                            <td>{criteriaAnswer.criteria.name}</td>
                                            <td>{criteriaAnswer.criteria.description}</td>
                                            <td>{criteriaAnswer.criteria.pmd}</td>
                                            <td>{criteriaAnswer.criteria.weight}</td>
                                            <td>{criteriaAnswer.selfEvaluation}</td>
                                        </>
                                    ))}
                                </tr>
                            </tbody>
                        </table>

                    </CandidateContainer>
                </>
            ) : (<p>Carregando...</p>)}
        </>
    )
}

export default JobAnswerDetails

/* Arquivo que representa a interface da página inicial de Empresa */

import React, { useCallback, useEffect, useState } from 'react'
import User from '../../utils/User'
import logo from '../../assets/venturahrlogo.jpg'
import Button from '../../components/Button'
import { Header, NavBar, MainContainer, JobVacancies } from './styles'
import { Link, useHistory } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'

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


const CompanyIndex: React.FC = (...rest) => {
    const { signOut } = useAuth()
    const history = useHistory()

    const handleSignOut = useCallback(() => {
        signOut()
        history.push('/')
    }, [signOut])

    const [company] = useState<User>(() => {
        const user = localStorage.getItem('@VenturaHR:user')
        if (user) return JSON.parse(user)
    })

    const [jobVacancies, setJobVacancies] = useState<JobVacancy[] | null>(null)
    const [jobVacancyAnswers, setjobVacancyAnswers] = useState<JobVacancyAnswer[]>([] as JobVacancyAnswer[])

    const calculateCandidateRanking = (listOfCriteriaAnswers: CriteriaAnswer[]) => {
        let selfEvaluationAndWeightAdition = 0
        let weightAdition = 0
        for (const criteriaAnswer of listOfCriteriaAnswers) {
            const selfEvaluation = criteriaAnswer.selfEvaluation
            const weight = criteriaAnswer.criteria.weight
            selfEvaluationAndWeightAdition += (selfEvaluation * weight)
            weightAdition += weight
        }
        return (selfEvaluationAndWeightAdition / weightAdition) + "/5"
    }

    const getJobVacancyAnswersFromApi = (jobVacancyId: CriteriaAnswer[]) => {
        api.get(`job_vacancy_answers/${jobVacancyId}`).then(response => {
            const jobVacancyAnswers = response.data

            for (const jobVacancyAnswer of jobVacancyAnswers) {
                if (!jobVacancyAnswers.includes(jobVacancyAnswer)) {
                    setjobVacancyAnswers([...jobVacancyAnswers, jobVacancyAnswer])
                } else setjobVacancyAnswers(jobVacancyAnswers)
            }
        })
    }

    useEffect(() => {
        api.get(`jobvacancies/company/${company.id}`).then(response => {
            const jobVacancies = response.data
            setJobVacancies(jobVacancies)

            if (jobVacancies) {
                for (const jobVacancy of jobVacancies) {
                    console.log('jobVacancyId', jobVacancy.id)
                    getJobVacancyAnswersFromApi(jobVacancy.id)
                }

            }
        })
    }, [])

    return (
        <>
            <Header>
                <img src={logo} alt="venturahr logo" width="80"></img>
                <NavBar>
                    <ul>
                        <li><a onClick={handleSignOut}>Sair</a></li>
                    </ul>
                </NavBar>
            </Header>

            <MainContainer>
                <h1>Bem-vindo, {company?.name}!</h1>

                <JobVacancies>
                    <h2>Vagas Publicadas</h2>
                    {jobVacancies && jobVacancies.map(jobVacancy => (
                        <>
                            <button
                                onClick={() => history.push(`update-job/${jobVacancy.id}`)}>
                                Atualizar
                            </button>
                            <button>Deletar</button>
                            <Link key={jobVacancy.id} to="/">
                                <img src={jobVacancy.companyLogo}
                                    alt="logo da empresa"
                                    width="40px" />
                                <div className="info">
                                    <strong>{jobVacancy.companyName} - {jobVacancy.address.city}</strong>
                                    <p>{jobVacancy.title}</p>
                                </div>
                                <FiChevronRight size={20}></FiChevronRight>
                            </Link>

                        </>
                    ))}

                    <div className="button">
                        <Button onClick={() => history.push('/company/create-job')}>PUBLICAR VAGA</Button>
                    </div>

                </JobVacancies>

                <JobVacancies>
                    <h2>Respostas</h2>
                    {jobVacancyAnswers.map(jobVacancyAnswer => (
                        <>
                            <Link to='/'>
                                <strong>{jobVacancyAnswer.jobVacancy.title}</strong>
                                <div className="info">
                                    <strong>{jobVacancyAnswer.candidate.name} - {jobVacancyAnswer.candidate.phone}</strong>
                                    <p>{jobVacancyAnswer.candidate.email}</p>
                                </div>
                                <h3>{calculateCandidateRanking(jobVacancyAnswer.criteriaListAnswer)}</h3>
                                <FiChevronRight size={20}></FiChevronRight>
                            </Link>
                        </>
                    ))}

                </JobVacancies>

            </MainContainer>
        </>
    )
}

export default CompanyIndex

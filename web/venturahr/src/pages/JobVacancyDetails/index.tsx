import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, JobVacancyInfo, Button } from './styles'
import logo from '../../assets/venturahrlogo.jpg'
import { FiChevronLeft } from 'react-icons/fi'
import api from '../../services/api'

/* Front-end da página detalhes de vaga */

interface JobVacancyParams {
    id: string
}

interface JobVacancy {
    title: string
    description: string
    companyLogo: string
    companyDescription: string
    companyName: string
    city: string
    state: string
    contractType: string
    contractDuration: string
    closingDate: string
    criteriaList: string[]
}

const JobVacancyDetails: React.FC = () => {
    const [jobVacancy, setJobVacancy] = useState<JobVacancy | null>(null)

    const { params } = useRouteMatch<JobVacancyParams>()

    useEffect(() => {
        api.get(`jobvacancies/${params.id}`).then((response) => {
            setJobVacancy(response.data)
        })
    }, [params.id])

    console.log('jobVacancy state: ', jobVacancy)

    return (
        <>
            <Header>
                <img src={logo} alt="Logo da Empresa" width="80"></img>
                <Link to="/">
                    <FiChevronLeft size={16}></FiChevronLeft>
                Voltar
            </Link>
            </Header>
            { jobVacancy ? (
                <JobVacancyInfo>
                    <header>
                        <img src={jobVacancy.companyLogo}></img>
                        <div>
                            <strong>{jobVacancy.title}</strong>
                            <p>{jobVacancy.city}</p>
                        </div>
                    </header>
                    <h2>Empresa: <span>{jobVacancy.companyName}</span></h2>
                    <h2>Descrição da Empresa</h2>
                    <p>{jobVacancy.companyDescription}</p>
                    <h2>Descrição da Vaga</h2>
                    <p>{jobVacancy.description}</p>
                    <h2>Critérios</h2>
                    <ul>
                        {jobVacancy.criteriaList.map(criterion => (
                            <li>{criterion}</li>
                        ))}
                    </ul>
                    <strong>Local: <span>{jobVacancy.city}, </span><span>{jobVacancy.state}</span></strong>
                    <br></br>
                    <strong>Tipo de Contrato: <span>{jobVacancy.contractType}</span></strong>
                    <br></br>
                    <strong>Data de fechamento da vaga: <span>{jobVacancy.closingDate}</span></strong>
                    <br></br>
                    <Button>APLICAR</Button>
                </JobVacancyInfo>
            ) : (<p>Carregando...</p>)}
        </>
    )
}

export default JobVacancyDetails
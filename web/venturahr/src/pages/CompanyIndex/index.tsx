/* Arquivo que representa a interface da página inicial de Empresa */

import React, { useEffect, useState } from 'react'
import User from '../../utils/User'
import logo from '../../assets/venturahrlogo.jpg'
import Button from '../../components/Button'
import { Header, NavBar, MainContainer, JobVacancies } from './styles'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

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

const CompanyIndex: React.FC = () => {

    const [company] = useState<User>(() => {
        const user = localStorage.getItem('@VenturaHR:user')
        if (user) return JSON.parse(user)
    })

    const [jobVacancies, setJobVacancies] = useState<JobVacancy[] | null>(null)

    useEffect(() => {
        api.get(`jobvacancies/${company.id}`).then(response => {
            setJobVacancies(response.data)
        })
    }, [jobVacancies])

    return (
        <>
            <Header>
                <img src={logo} alt="venturahr logo" width="80"></img>
                <NavBar>
                    <ul>
                        <li><Link to='/'>Sair</Link></li>
                    </ul>
                </NavBar>
            </Header>

            <MainContainer>
                <h1>Bem-vindo, {company?.name}!</h1>

                <JobVacancies>
                    <h2>Vagas Publicadas</h2>
                    {jobVacancies && jobVacancies.map(jobVacancy => (

                        <Link to='/'>
                            <img src={jobVacancy.companyLogo}
                                alt="logo da empresa"
                                width="40px" />
                            <div className="info">
                                <strong>{jobVacancy.companyName} - {jobVacancy.address.city}</strong>
                                <p>{jobVacancy.title}</p>
                            </div>

                            <FiChevronRight size={20}></FiChevronRight>
                        </Link>
                    ))}
                    <div className="button">
                        <Button>PUBLICAR VAGA</Button>
                    </div>

                </JobVacancies>

            </MainContainer>

        </>
    )
}

export default CompanyIndex

import React, { useState, useEffect } from 'react'
import { NavBar, Header, MainContainer, Form, Tutorial, LatestJobs } from './styles'
import logo from '../../assets/venturahrlogo.jpg'
import person from '../../assets/working.jpg'
import tutorial from '../../assets/venturahrtutorial.svg'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

/* Front-end da página inicial do site venturaHR (Index) */


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


const Index: React.FC = () => {

    const [jobVacancies, setJobVacancies] = useState<JobVacancy[]>(() => {
        const storagedRepositories = localStorage.getItem('@VenturaHR:jobvacancies',)
        if (storagedRepositories) return JSON.parse(storagedRepositories)
        return []
    })

    useEffect(() => {
        api.get('jobvacancies').then(response => {
            setJobVacancies(response.data)
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('@VenturaHR:jobvacancies', JSON.stringify(jobVacancies))
    }, [jobVacancies])

    return (
        <>
            <Header>
                <img src={logo} alt="venturahr logo" width="80"></img>
                <NavBar>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><Link to='/login'>Entrar</Link></li>
                    </ul>
                </NavBar>
                <Link className="cta" to="/cadastro"><button>Cadastrar</button></Link>
            </Header>

            <MainContainer>
                <div>
                    <p>Se cadastre para obter mais funcionalidades!</p>
                    <h1>Encontre o trabalho perfeito para você.</h1>
                    <Form>
                        <input placeholder="Digite o nome da vaga/empresa"></input>
                        <button type="submit">Pesquisar</button>
                    </Form>
                </div>
                <img src={person} width="400"></img>
            </MainContainer>

            <Tutorial src={tutorial}></Tutorial>

            <LatestJobs>
                <h1>Últimas <span>vagas</span> publicadas</h1>
                {jobVacancies.map(jobVacancy => (

                    <Link key={jobVacancy.id} to={`/jobvacancies/${jobVacancy.id}`}>
                        <img src={jobVacancy.companyLogo}
                            alt="Logo da Empresa"
                            width="40px" />
                        <div>
                <strong>{jobVacancy.companyName} - {jobVacancy.address.city}</strong>
                            <p>{jobVacancy.title}</p>
                        </div>

                        <FiChevronRight size={20}></FiChevronRight>
                    </Link>
                ))}
            </LatestJobs>
        </>
    )
}

export default Index

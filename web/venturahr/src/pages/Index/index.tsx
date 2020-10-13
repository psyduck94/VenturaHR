import React, { useState, useEffect } from 'react'
import { NavBar, Header, MainContainer, Form, Tutorial, LatestJobs } from './styles'
import logo from '../../assets/venturahrlogo.jpg'
import person from '../../assets/working.jpg'
import tutorial from '../../assets/venturahrtutorial.svg'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

interface JobVacancy {
    id: string
    title: string
    companyName: string
    companyLogo: string
    city: string
}

const Index: React.FC = () => {
    const [jobVacancies, setJobVacancies] = useState<JobVacancy[]>([])

    useEffect(() => {
        api.get('jobvacancies').then(response => {
            setJobVacancies(response.data)
        })
    }, [])

    async function handleGetJobVacancies(): Promise<void> {
        const response = await api.get('jobvacancies')
        const jobVacancies = response.data

        setJobVacancies(jobVacancies)
    }

    return (
        <React.Fragment>

            <Header>
                <img src={logo} alt="venturahr logo" width="80"></img>
                <NavBar>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Entrar</a></li>
                    </ul>
                </NavBar>
                <a className="cta" href="#"><button>Cadastrar</button></a>
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
                    <a key={jobVacancy.id} href="#">
                        <img src={jobVacancy.companyLogo}
                            alt="Logo da Empresa"
                            width="40px"
                        />
                        <div>
                            <strong>{jobVacancy.companyName} - {jobVacancy.city}</strong>
                            <p>{jobVacancy.title}</p>
                        </div>

                        <FiChevronRight size={20}></FiChevronRight>
                    </a>
                ))}
            </LatestJobs>

        </React.Fragment>
    )
}

export default Index

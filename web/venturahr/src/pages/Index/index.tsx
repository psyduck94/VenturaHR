import React from 'react'
import { NavBar, Header, MainContainer, Form, Tutorial, LatestJobs } from './styles'
import logo from '../../assets/venturahrlogo.jpg'
import person from '../../assets/working.jpg'
import tutorial from '../../assets/venturahrtutorial.svg'
import { FiChevronRight } from 'react-icons/fi'

const Index: React.FC = () => {
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
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                        alt="Logo da Empresa"
                        width="40px"
                    />
                    <div>
                        <strong>Instagram - SP</strong>
                        <p>Desenvolvedor Android</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="#">
                    <img src="https://i1.wp.com/sarakappler.com/wp-content/uploads/2018/05/logo-slack-png-300.png?fit=300%2C300&ssl=1"
                        alt="Logo da Empresa"
                        width="40px"
                    />
                    <div>
                        <strong>Slack - RJ</strong>
                        <p>Designer Visual</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
                        alt="Logo da Empresa"
                        width="40px"
                    />
                    <div>
                        <strong>Google - SP</strong>
                        <p>Engenheiro de Software</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                        alt="Logo da Empresa"
                        width="40px"
                    />
                    <div>
                        <strong>Facebook - SP</strong>
                        <p>UX Designer</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
            </LatestJobs>

        </React.Fragment>
    )
}

export default Index

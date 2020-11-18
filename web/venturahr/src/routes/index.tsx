import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Index from '../pages/Index'
import JobVacancyDetails from '../pages/JobVacancyDetails'
import Cadastro from '../pages/SignUp'
import Login from '../pages/Login'
import CompanyIndex from '../pages/CompanyIndex'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/jobvacancies/:id+" component={JobVacancyDetails} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/company/index" component={CompanyIndex} isPrivate />
    </Switch>
)

export default Routes

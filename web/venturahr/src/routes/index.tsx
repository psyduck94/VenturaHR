import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from '../pages/Index'
import JobVacancyDetails from '../pages/JobVacancyDetails'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'

const Routes: React.FC = () => (
    <Switch>
        < Route path="/" exact component={Index} />
        < Route path="/jobvacancies/:id+" component={JobVacancyDetails} />
        < Route path="/cadastro" component={Cadastro} />
        < Route path="/login" component={Login} />
    </Switch>
)

export default Routes

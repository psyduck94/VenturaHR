import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from '../pages/Index'
import JobVacancyDetails from '../pages/JobVacancyDetails'
import Cadastro from '../pages/Cadastro'

const Routes: React.FC = () => (
    <Switch>
        < Route path="/" exact component={Index} />
        < Route path="/jobvacancies/:id+" component={JobVacancyDetails} />
        < Route path="/cadastro" component={Cadastro} />
    </Switch>
)

export default Routes

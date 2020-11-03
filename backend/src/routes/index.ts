import { Router } from 'express'
import jobvacanciesRouter from './jobvacancies.routes'
import usersRouter from './users.routes'
import criteriaRouter from './criteria.routes'
import addressRouter from './address.routes'

/* Gerenciamento de Rotas da Aplicação */

const routes = Router()
routes.use('/jobvacancies', jobvacanciesRouter)
routes.use('/users', usersRouter)
routes.use('/criteriaList', criteriaRouter)
routes.use('/addresses', addressRouter)

export default routes

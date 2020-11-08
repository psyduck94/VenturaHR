import { Router } from 'express'
import jobvacanciesRouter from './jobvacancies.routes'
import usersRouter from './users.routes'
import criteriaRouter from './criteria.routes'
import addressRouter from './address.routes'
import sessionsRouter from './sessions.routes'

/* Gerenciamento de Rotas da Aplicação */

const routes = Router()
routes.use('/jobvacancies', jobvacanciesRouter)
routes.use('/users', usersRouter)
routes.use('/criteriaList', criteriaRouter)
routes.use('/addresses', addressRouter)
routes.use('/sessions', sessionsRouter)

export default routes

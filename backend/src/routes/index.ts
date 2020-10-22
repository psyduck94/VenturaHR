import { Router } from 'express'
import jobvacanciesRouter from './jobvacancies.routes'
import usersRouter from './users.routes'

/* Gerenciamento de Rotas da Aplicação */

const routes = Router()
routes.use('/jobvacancies', jobvacanciesRouter)
routes.use('/users', usersRouter)

export default routes

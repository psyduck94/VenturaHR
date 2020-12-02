import { Router } from 'express'
import jobvacanciesRouter from './jobvacancies.routes'
import usersRouter from './users.routes'
import criteriaRouter from './criteria.routes'
import addressRouter from './address.routes'
import sessionsRouter from './sessions.routes'
import jobVacancyAnswerRouter from './job_vacancy_answers.routes'
import criteriaAnswerRouter from './criteria_answer.routes'
import searchJobsRouter from './search_jobs.routes'

/* Gerenciamento de Rotas da Aplicação */

const routes = Router()
routes.use('/search', searchJobsRouter)
routes.use('/jobvacancies', jobvacanciesRouter)
routes.use('/users', usersRouter)
routes.use('/criteriaList', criteriaRouter)
routes.use('/addresses', addressRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/job_vacancy_answers', jobVacancyAnswerRouter)
routes.use('/criteriaListAnswer', criteriaAnswerRouter)

export default routes

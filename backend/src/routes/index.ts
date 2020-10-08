import { Router } from 'express'
import jobvacanciesRouter from './jobvacancies.routes'

const routes = Router()
routes.use('/jobvacancies', jobvacanciesRouter)

export default routes

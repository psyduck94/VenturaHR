import { getCustomRepository } from 'typeorm'
import { Router } from 'express'
import JobVacancyRepository from '../repositories/JobVacancyRepository'

const jobVacanciesRouter = Router()

jobVacanciesRouter.get('/', (request, response) => {
  const jobVacanciesRepository = getCustomRepository(JobVacancyRepository)
  const jobVacancies = jobVacanciesRepository.find()
  return response.json(jobVacancies)
})

export default jobVacanciesRouter

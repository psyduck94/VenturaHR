import { getCustomRepository } from 'typeorm'
import { response, Router } from 'express'
import { parseISO } from 'date-fns'
import JobVacancyRepository from '../repositories/JobVacancyRepository'
import CreateJobVacancyService from '../services/CreateJobVacancyService'

const jobVacanciesRouter = Router()

jobVacanciesRouter.get('/', async (request, response) => {
  try {
    const jobVacanciesRepository = getCustomRepository(JobVacancyRepository)
    const jobVacancies = await jobVacanciesRepository.find()
    return response.json(jobVacancies)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

jobVacanciesRouter.post('/', async (request, response) => {
  try {
    const {
      description,
      companyName,
      city,
      state,
      contractType,
      contractDuration,
      criteriaList,
      closingDate,
    } = request.body

    const parsedClosingDate = parseISO(closingDate)
    const createJobVacancy = new CreateJobVacancyService()
    const jobVacancy = await createJobVacancy.execute({
      description,
      companyName,
      city,
      state,
      contractType,
      contractDuration,
      closingDate: parsedClosingDate,
      criteriaList,
    })

    return response.json(jobVacancy)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default jobVacanciesRouter

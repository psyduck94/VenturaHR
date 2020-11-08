import { getCustomRepository } from 'typeorm'
import { response, Router } from 'express'
import { parseISO } from 'date-fns'
import JobVacancyRepository from '../repositories/JobVacancyRepository'
import CreateJobVacancyService from '../services/CreateJobVacancyService'
import Criteria from '../domain/models/Criteria'

/* Gerenciamento de Rotas da Aplicação */

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

jobVacanciesRouter.get('/:id', async (request, response) => {
  try {
    const { params } = request
    const jobVacanciesRepository = getCustomRepository(JobVacancyRepository)
    const jobVacancy = await jobVacanciesRepository.findOne(params, { relations: ['criteriaList', 'address'] })
    return response.json(jobVacancy)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

jobVacanciesRouter.delete('/:id', async (request, response) => {
  try {
    const { params } = request
    const jobVacanciesRepository = getCustomRepository(JobVacancyRepository)
    const jobVacancy = await jobVacanciesRepository.delete(params)
    return response.json(jobVacancy)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

jobVacanciesRouter.post('/', async (request, response) => {
  try {
    const {
      description,
      title,
      companyLogo,
      companyName,
      companyDescription,
      contractType,
      contractDuration,
      criteriaList,
      company,
      address,
      closingDate,
    } = request.body

    const parsedClosingDate = parseISO(closingDate)
    const createJobVacancy = new CreateJobVacancyService()
    const jobVacancy = await createJobVacancy.execute({
      description,
      title,
      companyLogo,
      companyName,
      companyDescription,
      contractType,
      contractDuration,
      company,
      address,
      closingDate: parsedClosingDate,
      criteriaList,
    })

    return response.json(jobVacancy)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default jobVacanciesRouter

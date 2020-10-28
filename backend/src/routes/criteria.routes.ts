import { getRepository } from 'typeorm'
import { response, Router } from 'express'
import CreateCriteriaService from '../services/CreateCriteriaService'
import Criteria from '../domain/models/Criteria'

const criteriaRouter = Router()

criteriaRouter.get('/', async (request, response) => {
  try {
    const jobVacanciesRepository = getRepository(Criteria)
    const jobVacancies = await jobVacanciesRepository.find()
    return response.json(jobVacancies)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

criteriaRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      pmd,
      weight,
      description,
      jobVacancy,
    } = request.body

    const createCriteria = new CreateCriteriaService()
    const criteria = await createCriteria.execute({
      name,
      pmd,
      weight,
      description,
      jobVacancy,
    })

    return response.json(criteria)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default criteriaRouter

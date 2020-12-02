import { getRepository } from 'typeorm'
import { response, Router } from 'express'
import CriteriaAnswer from '../domain/models/CriteriaAnswer'
import CreateCriteriaAnswerService from '../services/CreateCriteriaAnswerService'

const criteriaAnswerRouter = Router()

criteriaAnswerRouter.get('/', async (request, response) => {
  try {
    const criteriaAnswerRepository = getRepository(CriteriaAnswer)
    const criteriaAnswer = await criteriaAnswerRepository.find()
    return response.json(criteriaAnswer)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

criteriaAnswerRouter.post('/', async (request, response) => {
  try {
    const {
      pmd,
      weight,
      criteria,
      jobVacancyAnswer,
    } = request.body

    const createCriteriaAnswer = new CreateCriteriaAnswerService()
    const criteriaAnswer = await createCriteriaAnswer.execute({
      pmd, weight, criteria, jobVacancyAnswer,
    })

    return response.json(criteriaAnswer)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default criteriaAnswerRouter

import { getRepository } from 'typeorm'
import { response, Router } from 'express'
import JobVacancyAnswer from '../domain/models/JobVacancyAnswer'
import CreateJobVacancyAnswerService from '../services/CreateJobVacancyAnswerService'

const jobVacancyAnswerRouter = Router()

jobVacancyAnswerRouter.get('/', async (request, response) => {
  try {
    const jobVacancyAnswerRepository = getRepository(JobVacancyAnswer)
    const jobVacancyAnswers = await jobVacancyAnswerRepository
      .find({ relations: ['candidate', 'jobVacancy', 'criteriaListAnswer'] })

    return response.json(jobVacancyAnswers)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

jobVacancyAnswerRouter.post('/', async (request, response) => {
  try {
    const { candidate, jobVacancy } = request.body
    const createJobVacancyAnswer = new CreateJobVacancyAnswerService()
    const jobVacancyAnswer = await createJobVacancyAnswer.execute({
      candidate, jobVacancy,
    })

    return response.json(jobVacancyAnswer)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default jobVacancyAnswerRouter

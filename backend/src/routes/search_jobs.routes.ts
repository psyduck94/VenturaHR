import { getCustomRepository, getRepository, Like } from 'typeorm'
import { response, Router } from 'express'
import JobVacancy from '../domain/models/JobVacancy'

const searchJobsRouter = Router()

searchJobsRouter.get('/', async (request, response) => {
  try {
    const { query } = request.query
    const jobVacanciesRepository = getRepository(JobVacancy)
    const jobVacancies = await jobVacanciesRepository.find({
      where: [
        { companyName: Like(`%${query}%`) },
        { title: Like(`%${query}%`) },
      ],
    })
    return response.json(jobVacancies)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default searchJobsRouter

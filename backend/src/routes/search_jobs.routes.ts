import { getCustomRepository, getRepository, Like } from 'typeorm'
import { response, Router } from 'express'
import JobVacancy from '../domain/models/JobVacancy'

const searchJobsRouter = Router()

searchJobsRouter.get('/', async (request, response) => {
  try {
    const { query } = request.query
    const jobVacanciesRepository = getRepository(JobVacancy)
    const jobVacancies = await jobVacanciesRepository.createQueryBuilder('job_vacancies')
      .innerJoinAndSelect('job_vacancies.criteriaList', 'criteriaList')
      .innerJoinAndSelect('job_vacancies.address', 'address')
      .where(`LOWER(job_vacancies.companyName) like LOWER(:companyName)
              OR LOWER(job_vacancies.title) like LOWER(:jobTitle)
              OR LOWER(criteriaList.name) like LOWER(:criteriaName)`,
      {
        companyName: `%${query}%`,
        jobTitle: `%${query}%`,
        criteriaName: `%${query}%`,
      })
      .getMany()
    return response.json(jobVacancies)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default searchJobsRouter

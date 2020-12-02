import { getRepository } from 'typeorm'
import CriteriaAnswer from '../domain/models/CriteriaAnswer'
import JobVacancy from '../domain/models/JobVacancy'
import JobVacancyAnswer from '../domain/models/JobVacancyAnswer'
import User from '../domain/models/User'

interface Request {
  candidate: User
  jobVacancy: JobVacancy
}

class CreateJobVacancyAnswerService {
  async execute({ candidate, jobVacancy }: Request) {
    const jobVacancyAnswerRepository = getRepository(JobVacancyAnswer)
    const jobVacancyAnswer = jobVacancyAnswerRepository.create({
      candidate,
      jobVacancy,
    })

    await jobVacancyAnswerRepository.save(jobVacancyAnswer)
    return jobVacancyAnswer
  }
}

export default CreateJobVacancyAnswerService

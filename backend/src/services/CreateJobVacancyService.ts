import { getCustomRepository } from 'typeorm'
import JobVacancy from '../domain/models/JobVacancy'
import JobVacancyRepository from '../repositories/JobVacancyRepository'

interface Request {
  description: string
  companyName: string
  city: string
  state: string
  contractType: string
  contractDuration: string
  closingDate: Date
  criteriaList: string[]
}

class CreateJobVacancyService {
  public async execute({
    description,
    companyName,
    city,
    state,
    contractType,
    contractDuration,
    closingDate,
    criteriaList,
  }: Request): Promise<JobVacancy> {
    const jobVacancyRepository = getCustomRepository(JobVacancyRepository)
    const jobVacancy = jobVacancyRepository.create({
      description,
      companyName,
      city,
      state,
      contractType,
      contractDuration,
      closingDate,
      criteriaList,
    })

    await jobVacancyRepository.save(jobVacancy)

    return jobVacancy
  }
}

export default CreateJobVacancyService

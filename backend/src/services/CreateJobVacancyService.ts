import { getCustomRepository } from 'typeorm'
import JobVacancy from '../domain/models/JobVacancy'
import JobVacancyRepository from '../repositories/JobVacancyRepository'
import Criteria from '../domain/models/Criteria'
import Address from '../domain/models/Address'
import User from '../domain/models/User'

/* Classe de serviço para a criação de vaga */

interface Request {
  description: string
  title: string
  companyLogo: string
  companyName: string
  companyDescription: string
  contractType: string
  contractDuration: string
  closingDate: Date
  address: Address
  company: User
  criteriaList: Criteria[]
}

class CreateJobVacancyService {
  public async execute({
    description,
    title,
    companyLogo,
    companyName,
    companyDescription,
    contractType,
    contractDuration,
    company,
    closingDate,
    address,
    criteriaList,
  }: Request): Promise<JobVacancy> {
    const jobVacancyRepository = getCustomRepository(JobVacancyRepository)
    const jobVacancy = jobVacancyRepository.create({
      description,
      title,
      companyLogo,
      companyName,
      companyDescription,
      contractType,
      contractDuration,
      closingDate,
      company,
      address,
      criteriaList,
    })

    await jobVacancyRepository.save(jobVacancy)

    return jobVacancy
  }
}

export default CreateJobVacancyService

import { getCustomRepository } from 'typeorm'
import JobVacancy from '../domain/models/JobVacancy'
import JobVacancyRepository from '../repositories/JobVacancyRepository'

interface Request {
  description: string
  companyName: string
  city: string
  state: string
  contractType: string
  closingDate: Date
  criteriaList: string[]
}

class CreateJobVacancyService {

}

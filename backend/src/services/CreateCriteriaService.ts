import { getRepository } from 'typeorm'
import Criteria from '../domain/models/Criteria'
import JobVacancy from '../domain/models/JobVacancy'

/* Classe de serviço para a criação de critério */

interface Request {
  name: string
  pmd: number
  weight: number
  description: string
  jobVacancy: JobVacancy
}
class CreateCriteriaService {
  async execute({
    name,
    pmd,
    weight,
    description,
    jobVacancy,
  }: Request): Promise<Criteria> {
    const criteriaRepository = getRepository(Criteria)
    const criteria = criteriaRepository.create({
      name,
      pmd,
      weight,
      description,
      jobVacancy,
    })
    await criteriaRepository.save(criteria)
    return criteria
  }
}

export default CreateCriteriaService

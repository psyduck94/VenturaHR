import { getRepository } from 'typeorm'
import Criteria from '../domain/models/Criteria'
import CriteriaAnswer from '../domain/models/CriteriaAnswer'
import JobVacancyAnswer from '../domain/models/JobVacancyAnswer'

interface Request {
  selfEvaluation: number
  criteria: Criteria
  jobVacancyAnswer: JobVacancyAnswer
}

class CreateCriteriaAnswerService {
  async execute({
    selfEvaluation, criteria, jobVacancyAnswer,
  }: Request): Promise<CriteriaAnswer> {
    const criteriaAnswerRepository = getRepository(CriteriaAnswer)
    const criteriaAnswer = criteriaAnswerRepository.create({
      selfEvaluation,
      criteria,
      jobVacancyAnswer,
    })

    await criteriaAnswerRepository.save(criteriaAnswer)
    return criteriaAnswer
  }
}

export default CreateCriteriaAnswerService

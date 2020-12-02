import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import Criteria from './Criteria'
import JobVacancyAnswer from './JobVacancyAnswer'

@Entity('criteria_answer')
class CriteriaAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  selfEvaluation: number

  @OneToOne(type => Criteria, criteria => criteria.criteriaAnswer, { eager: true })
  @JoinColumn()
  criteria: Criteria

  @ManyToOne(type => JobVacancyAnswer, jobVacancyAnswer => jobVacancyAnswer.criteriaListAnswer)
  @JoinColumn()
  jobVacancyAnswer: JobVacancyAnswer
}

export default CriteriaAnswer

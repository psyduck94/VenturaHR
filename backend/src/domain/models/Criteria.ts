import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne,
} from 'typeorm'
import CriteriaAnswer from './CriteriaAnswer'
import JobVacancy from './JobVacancy'

/* Classe que representa a entidade Critério */

@Entity('criteria')
class Criteria {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  pmd: number

  @Column()
  weight: number

  @Column()
  description: string

  @ManyToOne(type => JobVacancy, criteriaList => Criteria)
  jobVacancy: JobVacancy

  @OneToOne(type => CriteriaAnswer, criteriaAnswer => criteriaAnswer.criteria)
  criteriaAnswer: CriteriaAnswer
}

export default Criteria

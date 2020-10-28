import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne,
} from 'typeorm'
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
}

export default Criteria

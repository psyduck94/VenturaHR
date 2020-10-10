import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { uuid } from 'uuidv4'

@Entity('job_vacancies')
class JobVacancy {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  companyLogo: string

  @Column()
  companyDescription: string

  @Column()
  companyName: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  contractType: string

  @Column()
  contractDuration: string

  @Column('timestamp with time zone')
  closingDate: Date

  @Column('text', { array: true })
  criteriaList: string[]
}

export default JobVacancy

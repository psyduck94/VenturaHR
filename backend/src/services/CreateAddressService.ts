import { getRepository } from 'typeorm'
import Address from '../domain/models/Address'
import JobVacancy from '../domain/models/JobVacancy'

/* Classe de serviço para a criação de endereço */

interface Request {
  country: string
  state: string
  city: string
  streetName: string
  jobVacancy: JobVacancy
}

class CreateAddressService {
  async execute({
    country,
    state,
    city,
    streetName,
    jobVacancy,
  }: Request): Promise<Address> {
    const addressRepository = getRepository(Address)
    const address = addressRepository.create({
      country,
      state,
      city,
      streetName,
      jobVacancy,
    })
    await addressRepository.save(address)
    return address
  }
}

export default CreateAddressService

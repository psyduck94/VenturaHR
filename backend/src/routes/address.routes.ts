import { getRepository } from 'typeorm'
import { response, Router } from 'express'
import { add } from 'date-fns'
import CreateAddressService from '../services/CreateAddressService'
import Address from '../domain/models/Address'

const addressRouter = Router()

addressRouter.get('/', async (request, response) => {
  try {
    const addressRepository = getRepository(Address)
    const addresses = await addressRepository.find()
    return response.json(addresses)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

addressRouter.post('/', async (request, response) => {
  try {
    const {
      country,
      state,
      city,
      streetName,
      jobVacancy,
    } = request.body

    const createAddress = new CreateAddressService()
    const address = await createAddress.execute({
      country,
      state,
      city,
      streetName,
      jobVacancy,
    })

    return response.json(address)
  } catch (err) {
    return response.status(400).json({ error: err.messsage })
  }
})

export default addressRouter

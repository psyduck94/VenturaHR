/* Arquivo que representa o endpoint de usuários */

import { getRepository } from 'typeorm'
import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'
import User from '../domain/models/User'
import AccountType from '../domain/enums/AccountType'
import ensureAuthentication from '../middlewares/ensureAuthentication'

const usersRouter = Router()
usersRouter.use(ensureAuthentication)

usersRouter.get('/', async (request, response) => {
  try {
    const userRepository = getRepository(User)
    const users = await userRepository.find()
    return response.json(users)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

usersRouter.get('/:id', async (request, response) => {
  try {
    const { params } = request
    const userRepository = getRepository(User)
    const user = await userRepository.findOne(params)

    if (user?.accountType === AccountType.COMPANY) {
      const company = await userRepository.findOne(params, { relations: ['publishedJobs'] })
      return response.json(company)
    }

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

usersRouter.post('/', async (request, response) => {
  try {
    const {
      accountType,
      name,
      email,
      password,
      phone,
      state,
      city,
      cpf,
      cnpj,
    } = request.body

    const createUser = new CreateUserService()
    const user = await createUser.execute({
      accountType,
      name,
      email,
      password,
      phone,
      state,
      city,
      cpf,
      cnpj,
    })

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

usersRouter.delete('/:id', async (request, response) => {
  try {
    const { params } = request
    const userRepository = getRepository(User)
    await userRepository.delete(params)
    return response.json({ message: 'Usuário deletado com sucesso', status: 200 })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default usersRouter

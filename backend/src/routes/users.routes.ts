import { getCustomRepository } from 'typeorm'
import { response, Router } from 'express'
import CreateUserService from '../services/CreateUserService'

/* Arquivo que representa o endpoint de usuários */

const usersRouter = Router()

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

export default usersRouter

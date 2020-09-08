import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => response.json({ message: 'Hello World' }))

routes.get('/vagas', (request, response) => response.json({ vagas: 'vaga1, vaga2, vaga3' }))

export default routes

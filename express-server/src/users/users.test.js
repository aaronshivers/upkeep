const expect = require('expect')
const request = require('supertest')
const app = require('../app')

const checkEmail = (route, email) => {
  describe('if `email` is invalid', () => {
    it('should respond 400', async () => {
      await request(app)
      .post(route)
      .send(email)
      .expect(400)
    })
  })
}

// POST /users
describe('POST /users', () => {
  const userWithInvalidEmail = {
    email: 1234,
    password: '1234ASDF1!@#$asdf',
  }

  const route = '/users'

  checkEmail(route, userWithInvalidEmail)
})

// GET /users
describe('GET /users', () => {})

// GET /users/:id
describe('GET /users/:id', () => {})

// PATCH /users/:id
describe('PATCH /users/:id', () => {})

// DELETE /users/:id
describe('DELETE /users/:id', () => {})

import request from 'supertest'
import app from '../src/app'

describe('Express App Tests', () => {
  test('GET /api/hello', async () => {
    const res = await request(app).get('/api/hello')
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Hello from Express API!')
  })

  test('GET /api/health', async () => {
    const res = await request(app).get('/api/health')
    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe('UP')
  })

  test('GET /', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toContain('Hello Express')
  })
})
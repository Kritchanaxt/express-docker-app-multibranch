import express, { type Express, type Request, type Response } from 'express'

const app: Express = express()

const port: number = 3000

// Routes
// GET /
app.get('/', (_: Request, res: Response) => {
  res.json({
    message: 'Hello Express + TypeScript!'
  })
})

// GET /api/hello
app.get('/api/hello', (_: Request, res: Response) => {
  res.json({
    message: 'Hello from Express API!'
  })
})

// GET /api/health
app.get('/api/health', (_: Request, res: Response) => {
  res.json({
    status: 'UP'
  })
})

// GET /api/users
app.get('/api/users', (_: Request, res: Response) => {
  const users = [
    { id: 1, name: 'My name is Gotjitag E3 Mak Mak' },
    { id: 2, name: 'My name is Kritchanat T.' }
  ]
  res.json(users)
}) 

// GET /api/orders
app.get('/api/orders', (_: Request, res: Response) => {
  const orders = [
    { id: 1, userId: 1, productId: 2, quantity: 1 },
    { id: 2, userId: 2, productId: 3, quantity: 2 },
    { id: 3, userId: 1, productId: 1, quantity: 1 },
    { id: 4, userId: 2, productId: 4, quantity: 1 }
  ]
  res.json(orders)
})

// Start server
app.listen(port, () => console.log(`Application is running on port ${port}`))
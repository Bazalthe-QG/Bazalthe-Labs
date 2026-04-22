import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import projectRoutes from './routes/projects.js'
import conceptRoutes from './routes/concepts.js'

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(
  cors({
    origin: /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/,
    credentials: true,
  })
)
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/projects', projectRoutes)
app.use('/concepts', conceptRoutes)

app.get('/health', (_req, res) => res.json({ ok: true, ts: Date.now() }))

app.listen(PORT, () => {
  console.log(`\n  API server → http://localhost:${PORT}\n`)
})

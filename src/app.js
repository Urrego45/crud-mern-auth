import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"

import authRoutes  from './routes/auth.routes.js'
import tasksRoutes  from './routes/task.routes.js'


const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use(authRoutes);
app.use(tasksRoutes);
// console.log(app);

export default app


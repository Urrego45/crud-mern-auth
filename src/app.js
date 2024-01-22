import express from "express"
import morgan from "morgan"

import authRoutes from './routes/auth.routes.js'

const app = express()
app.use(morgan('dev'))

// console.log(authRoutes);
// app.use(authRoutes);
// console.log(app);

export default app


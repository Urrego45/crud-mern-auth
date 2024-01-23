import express from "express"
import { login, register, logout, profile } from '../controllers/auth.contrroller.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.get('/profile', authRequired, profile)

export default router

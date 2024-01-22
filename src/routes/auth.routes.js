import express from "express"
import { login, register } from '../controllers/auth.contrroller.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

console.log(router);

export default router

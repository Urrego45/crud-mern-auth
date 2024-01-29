import express from "express"
import { login, register, logout, profile } from '../controllers/auth.contrroller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { resgisterSchema, loginSchema } from "../schemas/auth.schema.js";


const router = express.Router()

router.post('/register', validateSchema(resgisterSchema) , register)

router.post('/login', validateSchema(loginSchema) , login)

router.post('/logout', logout)

router.get('/profile', authRequired, profile)

export default router

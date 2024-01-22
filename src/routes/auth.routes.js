import express from "express"
import { login, register } from '../controllers/auth.contrroller.js'

// console.log(login);
// console.log(register);

const router = express.Router()

router.post('/register', register)
// console.log(router.route);
router.post('/login', login)

// console.log(router);

export default router

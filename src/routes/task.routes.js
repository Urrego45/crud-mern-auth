import express from "express"
import { authRequired } from "../middlewares/validateToken"

const router = express.Router()


router.get('/tasks', authRequired, (req, res) => res.send('tasks'))


export default router


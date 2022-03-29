import { Router } from "express";

import * as usersCtrl from "../controller/usersCtrl";

import validRegister from '../middleware/validRegister'
import validLogin from '../middleware/validLogin'

const router = Router()

router.get('/users', usersCtrl.allUsers)

router.post('/register', validRegister, usersCtrl.register)
router.post('/login', validLogin, usersCtrl.login)

router.post('/removeuser/:id', usersCtrl.removeUsers)

export default router
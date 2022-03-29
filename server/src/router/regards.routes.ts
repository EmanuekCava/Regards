import { Router } from "express";

import * as regardsCtrl from '../controller/regardsCtrl'

import { upload } from '../helper/multer'

import auth from '../middleware/user'

const router = Router()

router.get("/allregards", regardsCtrl.allRegards)
router.get("/regards", auth, regardsCtrl.regards)
router.get("/regards/:id", auth, regardsCtrl.getRegards)
router.get("/regards/search", auth, regardsCtrl.searchRegard)

router.post("/createregards", auth, upload.array('files', 10), regardsCtrl.createRegards)

router.delete("/regards/remove/:id", regardsCtrl.removeRegards)

router.put("/regards/update/:id", auth, regardsCtrl.updateRegards)


export default router
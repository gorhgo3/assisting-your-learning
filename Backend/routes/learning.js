import express from "express"
import { checkVideo } from "../functions/index.js"

const router = express.Router()

router.use('/', async (req, res) => {
  const data = await checkVideo()
  res.send(data)
})


export default router
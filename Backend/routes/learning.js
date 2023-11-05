import express from "express"

const router = express.Router()

router.use('/', (req, res) => {
  res.send('this is a learning route')
})


export default router
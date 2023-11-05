import express from 'express'
import router from './routes/learning.js'

const app = express()
const port = process.env.PORT || 3000

app.use('/learning', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

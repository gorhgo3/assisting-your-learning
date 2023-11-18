import express from 'express'
import { createNewSession, getAllDocs } from '../functions/dbFunctions'

const router = express.Router()

router.get('/resources/:id', async (req, res) => {
  // THIS NEEDS AUTHENTICATION
  // GATHERS ALL RESOURCES FROM THE FIRESTORE DATABASE
  const { id } = req.params
  await getAllDocs(id)
    .then((response) => {
      res.status(200).json(response.data())
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})

router.post('/resources', async (req, res) => {
  const { data } = req.body
  await createNewSession(data)
    .then(() => {
      res.status(200).send('successfully added to the database')
    })
    .catch((err: Error) => {
      res.status(500).send('failed to add to the database' + err)
    })
})

export default router

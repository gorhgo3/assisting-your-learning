import express from 'express'
import { createNewSession, getAllDocs } from '../functions/fireStore'
import {
  DocumentChange,
  DocumentData,
  QuerySnapshot,
  SnapshotMetadata,
} from 'firebase/firestore'

const router = express.Router()

router.get('/resources', async (req, res) => {
  // gather all the learning resources from firestore
  const data = await getAllDocs()
  res.status(200).json(data)
})

router.post('/resources', async (req, res) => {
  const data = req.body
  await createNewSession(data)
    .then(() => {
      res.status(200).send('successfully added to the database')
    })
    .catch((err: Error) => {
      res.status(500).send('failed to add to the database' + err)
    })
})

export default router

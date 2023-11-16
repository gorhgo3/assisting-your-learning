import express from 'express'
import { getAllDocs } from '../functions/fireStore'
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

  console.log(data)

  res.status(200).json(data)
})

export default router

import express from 'express'
import { checkVideo } from '../functions/youtubeTranscript.js'
import reviewTranscript, { newStudySession, questionResponse } from '../functions/openAi.js'
import { TranscriptResponse } from 'youtube-transcript'

const router = express.Router()

router.post(`/transcript`, async (req, res) => {
  try {
    const jsonData = req.body.url
    const data: TranscriptResponse[] | undefined = await checkVideo(jsonData)
    const summary = data?.map((line) => line.text).join(' ')
    const response = await reviewTranscript(summary)
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

router.get('/study_session', async(req, res) => {
  try {
    const analysis = req.body.analysis
    const res = await newStudySession(analysis)
    res.status(200).json(res)
  } catch(err) {
    console.error(err)
    res.status(500).json({error: 'An error occured'})
  }
})

router.get('/question', async(req, res) => {
  try {
    const question = req.body.question
    const res = await questionResponse(question)
    res.status(200).json(res)
  } catch(err) {
    console.error(err)
    res.status(500).json({error: 'An error occured'})
  }
})




export default router

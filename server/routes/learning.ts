import express from 'express'
import { checkVideo } from '../functions/youtubeTranscript.js'
import reviewTranscript from '../functions/openAi.js'
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

export default router

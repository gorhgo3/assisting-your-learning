import express from 'express'
import { checkVideo } from '../functions/transcript.js'
import reviewTranscript, {
  newStudySession,
  questionResponse,
} from '../functions/openAi.js'
import { TranscriptResponse } from 'youtube-transcript'
import { OpenAI } from 'openai'
import { aiMessage } from '../models/ai.js'

const router = express.Router()

router.post(`/transcript`, async (req, res) => {
  try {
    const jsonData = req.body.url
    const data: TranscriptResponse[] | undefined = await checkVideo(jsonData)
    const summary = data?.map((line) => line.text).join(' ')
    const response = await reviewTranscript(summary)
    console.log(response)
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

router.post('/study_session', async (req, res) => {
  await newStudySession(req.body.analysis)
    .then((data: OpenAI.Chat.Completions.ChatCompletion) => {
      const studySession: aiMessage = {
        action: 'study_session',
        answer: data.choices[0].message.content as string,
      }
      res.status(200).json(studySession)
    })
    .catch((err) => {
      res.status(500).json({ error: 'An error occured' + err })
    })
})

router.get('/question', async (req, res) => {
  try {
    const question = req.body.question
    const res = await questionResponse(question)
    res.status(200).json(res)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'An error occured' })
  }
})

export default router

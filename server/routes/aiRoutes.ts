import express from 'express'
import { checkVideo } from '../functions/transcript.js'
import {
  reviewTranscript,
  newStudySession,
  questionResponse,
} from '../functions/aiFunctions.js'
import { TranscriptResponse } from 'youtube-transcript'
import { OpenAI } from 'openai'
import { VideoSummary, aiMessage } from '../models/aiModels.js'

const router = express.Router()

router.post(`/transcript`, async (req, res) => {
  const { url } = req.body
  const data: TranscriptResponse[] | undefined = await checkVideo(url)
  console.log('requesting transcript')

  const summary = data?.map((line) => line.text).join(' ')
  await reviewTranscript(summary)
    .then((response: VideoSummary) => {
      console.log(response)
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({ error: 'An error occurred' })
    })
})

router.post('/study_session', async (req, res) => {
  try {
    const { url } = req.body
    // create a youtube transcript request.
    const youtubeTranscript: TranscriptResponse[] | undefined =
      await checkVideo(url)
    const summary = youtubeTranscript?.map((line) => line.text).join(' ')
    console.log(summary);
    
    // generate a study session from the result
    await newStudySession(summary).then(
      (data: OpenAI.Chat.Completions.ChatCompletion) => {
        const studySession: aiMessage = {
          action: 'study_session',
          answer: data.choices[0].message.content as string,
        }
        res.status(200).json(studySession)
      }
    )
  } catch (err) {
    res.status(500).json({ error: 'An error occured' + err })
  }
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

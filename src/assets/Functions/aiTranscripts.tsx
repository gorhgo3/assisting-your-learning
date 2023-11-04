import { YoutubeTranscript, TranscriptResponse } from 'youtube-transcript'
import OpenAI from 'openai'
import { config } from 'dotenv'

config()

const ENDPOINT =
  'https://www.youtube.com/watch?v=auo00w0Jlco&ab_channel=DevAcademyAotearoa'

async function checkVideo() {
  try {
    // fetch transcript
    const data = YoutubeTranscript.fetchTranscript(ENDPOINT).then(
      (data: TranscriptResponse[]) => {
        const dataTranscript: string[] = []
        data.forEach((transcriptLine) => {
          dataTranscript.push(transcriptLine.text)
        })
        const dataTranscript2 = dataTranscript.join(' ')
        return dataTranscript2
      }
    )

    const message = `
      can you summarise the content of this transcript for a youtube video and bulletpoint the key points, and importantly explain if this is up to date to modern learning to code practises:
      ${await data}`

    runAI(message)
  } catch (err) {
    console.log('Transcript may be disabled for this video')
    console.log(err)
  }
}

async function runAI(message: string) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo',
  })

  console.log(chatCompletion.choices[0].message.content)
}

checkVideo()

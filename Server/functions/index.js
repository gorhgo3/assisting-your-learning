import { YoutubeTranscript } from 'youtube-transcript'
import OpenAI from 'openai'
import { config } from 'dotenv'

config()


export async function checkVideo (url) {
  const ENDPOINT = url
  try {
    // fetch transcript
    const data = YoutubeTranscript.fetchTranscript(ENDPOINT).then((data) => {
      const dataTranscript = []
      data.forEach((transcriptLine) => {
        dataTranscript.push(transcriptLine.text)
      })
      const dataTranscript2 = dataTranscript.join(' ')
      return dataTranscript2
    })

    const message = `
      can you summarise the content of this transcript for a youtube video and bulletpoint the key points, and importantly explain if this is up to date to modern learning to code practises:
      ${await data}`

      // return message
    return await runAI(message)
  } catch (err) {
    console.log('Transcript may be disabled for this video')
    console.log(err)
  }
}

async function runAI(message) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    })
    return chatCompletion.choices[0].message.content
  } catch (err) {
    return err
  }
}
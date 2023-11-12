import { YoutubeTranscript } from 'youtube-transcript'
import OpenAI from 'openai'
import { config } from 'dotenv'

config()


export async function checkVideo (url:string) {
  const ENDPOINT = url
  try {
    // fetch transcript
    const data = YoutubeTranscript.fetchTranscript(ENDPOINT).then((data) => {
      const dataTranscript:[] = []
      data.forEach((transcriptLine) => {
        dataTranscript.push(transcriptLine.text)
      })
      const dataTranscript2 = dataTranscript.join(' ')
      return dataTranscript2
    })
    return data
  } catch (err) {
    console.log('Transcript may be disabled for this video')
    console.log(err)
  }
}

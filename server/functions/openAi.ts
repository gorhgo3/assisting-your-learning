import { config } from 'dotenv'
import OpenAI from 'openai'

config()

export async function reviewTranscript(data: any) {
  const analyseTranscript = `
  can you summarise the content of this transcript for a youtube video and bulletpoint the key points, and importantly explain if this is up to date to modern learning to code practises:
  ${data}`
  // return message
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: analyseTranscript }],
      model: 'gpt-3.5-turbo',
    })
    return chatCompletion.choices[0].message.content
  } catch (err) {
    return err
  }
}


// Generate a 3 hour study session
export async function newStudySession(analysis:string) {
  const threeHoursStudy = `
  can you generate a series of topics that can take up to 3 hours total to get a better understanding of the content of this video- generate for me a study session of up to 3 hours from this overview:
  ${analysis}
  `
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: analysis }],
      model: 'gpt-3.5-turbo',
    })
    return chatCompletion.choices[0].message.content
  } catch (err) {
    return err
  }
}

// Store this as a completed topic
// Question this response

export default reviewTranscript

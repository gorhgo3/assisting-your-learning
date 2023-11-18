import { config } from 'dotenv'
import OpenAI from 'openai'

config()

export async function reviewTranscript(data: any) {
  const message = `
  can you summarise the content of this transcript for a youtube video and bulletpoint the key points, and importantly explain if this is up to date to modern learning to code practises:
  ${data}`
  // return message
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

// Generate a 3 hour study session
export async function newStudySession(
  analysis: string
): Promise<OpenAI.Chat.Completions.ChatCompletion> {
  const message = `
  can you generate some technical aspects from this transcript that I could  study for 3 hours. List them as HTML list items only:
  Send me only the responses in this format 
  *study xyz*
  ${analysis}
  `
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    })
    return chatCompletion
  } catch (err) {
    throw err
  }
}

// Question this response
export async function questionResponse(data: any) {
  const message = `
  can you please answer my question to this analysis:
  ${data.analysis}
  ${data.question}
  `
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

export default reviewTranscript

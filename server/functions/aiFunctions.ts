import { config } from 'dotenv'
import OpenAI from 'openai'
import { APIPromise } from 'openai/core.mjs'
import { VideoSummary } from '../models/aiModels'

config()

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

export async function reviewTranscript(data: any):Promise<VideoSummary> {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    const summary = aiSummariseTranscript(openai, data)
    const technical = aiSummariseTechnical(openai, data)
    const relevency = aiSummariseRelevent(openai, data)

    // UPON RESOLVE RETURN THESE VALUES
    const [summarySettled, technicalSettled, relevencySettled] =
      await Promise.all([summary, technical, relevency])

    const overview = {
      summary: summarySettled.choices[0].message.content,
      technical: technicalSettled.choices[0].message.content,
      relevancy: relevencySettled.choices[0].message.content,
    }

    return overview
  } catch (err) {
    return err
  }
}

export function aiSummariseTranscript(
  openai: OpenAI,
  data: any
): APIPromise<OpenAI.Chat.Completions.ChatCompletion> {
  const chatCompletion = openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Please summarize this YouTube video transcript in 3 sentences: ${data}`,
      },
    ],
    model: 'gpt-3.5-turbo',
  })
  return chatCompletion
}

export function aiSummariseTechnical(
  openai: OpenAI,
  data: any
): APIPromise<OpenAI.Chat.Completions.ChatCompletion> {
  const chatCompletion = openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `summarise this videos technical aspects: ${data}`,
      },
    ],
    model: 'gpt-3.5-turbo',
  })
  return chatCompletion
}

export function aiSummariseRelevent(
  openai: OpenAI,
  data: any
): APIPromise<OpenAI.Chat.Completions.ChatCompletion> {
  const chatCompletion = openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Is the content up to date with modern learning to code practices?: ${data}`,
      },
    ],
    model: 'gpt-3.5-turbo',
  })
  return chatCompletion
}

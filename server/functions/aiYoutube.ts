import OpenAI from 'openai'

async function runAI(data:any) {
  const message = `
  can you summarise the content of this transcript for a youtube video and bulletpoint the key points, and importantly explain if this is up to date to modern learning to code practises:
  ${await data}`

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

export default runAI
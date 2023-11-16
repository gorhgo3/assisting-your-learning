import superagent from 'superagent'
import { aiMessage } from '../../../server/models/ai'

const serverUrl = 'http://localhost:3000'

export async function getYoutubeTranscript(url: string) {
  const test = await superagent
    .post(serverUrl + '/learning/v1/openAI/transcript')
    .send({ url })
  return test.body
}

export async function getStudySession(analysis: string): Promise<aiMessage> {
  const response = await superagent
    .post(serverUrl + '/learning/v1/openAI/study_session')
    .send({ analysis })
  return response.body
}

export async function addToStudyHistory() {
  console.log('adding to study history')
}

export async function questionResponse(analysis: string, question: string) {
  console.log('questioning the response')
  const response = await superagent
    .get(serverUrl + '/learning/v1/openAI/question')
    .send({ data: [analysis, question] })
  return response.body
}

// DATABASE CALLS CRUD

export async function gatherAllData() {
  const response = await superagent.get(serverUrl + '/learning/v1/db/resources')
  return response.body
}

export async function addStudy(data:string) {
  const response = await superagent.post(
    serverUrl + '/learning/v1/db/resources'
  ).send({data})
  return response.body
}

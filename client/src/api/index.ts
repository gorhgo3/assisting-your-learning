import superagent from 'superagent'
import { NewStudyData, aiMessage } from '../../../server/models/aiModels'
import { UserModel } from '../../../server/models/dbModels'

const serverUrl = 'http://localhost:3000'
const HASHED_USER_ID = '1111aaaabbbbb' // this needs to become dynamic

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

export async function fetchUserDetails(
  hashedId: string = HASHED_USER_ID
): Promise<UserModel> {
  console.log('query firestore')
  const response = await superagent.get(
    serverUrl + `/learning/v1/db/resources/${hashedId}`
  )
  return response.body
}

export async function addStudyElement(data: NewStudyData) {
  const response = await superagent
    .post(serverUrl + '/learning/v1/db/resources')
    .send({ data })
  return response.body
}

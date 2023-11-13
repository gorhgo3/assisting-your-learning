import superagent from 'superagent'

const serverUrl = 'http://localhost:3000'

export async function getYoutubeTranscript(url: string) {
  const test = await superagent
    .post(serverUrl + '/learning/v1/openAI/transcript')
    .send({ url })
  return test.body
}

export async function getStudySessionPlan(analysis: string) {
  console.log('activating the study session')
  return superagent
    .get(serverUrl + '/learning/v1/openAI/study_session')
    .send(analysis)
}

export async function addToStudyHistory() {
  console.log('adding to study history')
}

export async function questionResponse(analysis: string, question: string) {
  console.log('questioning the response')
  return superagent
    .get(serverUrl + '/learning/v1/openAI/question')
    .send({ data: [analysis, question] })
}

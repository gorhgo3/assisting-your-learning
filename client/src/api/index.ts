import superagent from "superagent";

const serverUrl = 'http://localhost:3000'

export async function getYoutubeTranscript (url: string) {
  const test = await superagent.post(serverUrl + '/learning').send({url})
  return test.body
} 

export async function getStudySessionPlan () {
  console.log('activating the study session');
  
}

export async function addToStudyHistory () {
  console.log('adding to study history');
}

export async function questionResponse () {
  console.log('questioning the response');
}
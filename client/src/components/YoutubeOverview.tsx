import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import {
  getYoutubeTranscript,
  getStudySession,
  addToStudyHistory,
  questionResponse,
} from '../api'
import StudyProposals from './StudyProposals'
import { getUserDetails } from '../functions/userDetails'
import { useQuery } from '@tanstack/react-query'

function YoutubeOverview() {
  const [url, setUrl] = useState<string>('')
  const [transcript, setTranscript] = useState<string>('')
  const [studySession, setStudySession] = useState<string[] | null>()

  const { data } = useQuery({
    queryFn: getUserDetails,
    queryKey: ['user_id'],
  })  

  async function getAnalysis(url: string) {
    setUrl(url)
    getYoutubeTranscript(url).then((data) => {
      setTranscript(data)
    })
  }

  async function generateStudySession(session: any) {
    try {
      await getStudySession(transcript).then((data) => {
        const points = data.answer.split('\n')
        setStudySession(points)
        return points
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="youtube-overview">
      <YoutubeForm handleSubmit={getAnalysis} />
      {transcript && (
        // YOUTUBE SUMMARY AFTER URL SUBMIT
        <>
          <div className="ai-analysis-overview">
            <h3>Here is a Summary of the Youtube Video:</h3>
            <p>{transcript}</p>
          </div>
          <button onClick={generateStudySession}>Generate study session</button>
        </>
      )}
      {studySession && <StudyProposals study={studySession} />}
    </div>
  )
}

export default YoutubeOverview

// {/* <h4>Want to work with this response?</h4>
// <button onClick={addToStudyHistory}>
// Store this as a completed topic
// </button>
// <button onClick={() => questionResponse}>
// Question this response
// </button> */}

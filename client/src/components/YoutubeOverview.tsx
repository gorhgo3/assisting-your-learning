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
import { VideoSummary } from '../../../server/models/aiModels'
import TEST_SUMMARY from '../styles/testData'

function YoutubeOverview() {
  const [url, setUrl] = useState<string>('')
  const [transcript, setTranscript] = useState<VideoSummary>(TEST_SUMMARY)
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

  async function generateStudySession() {
    try {
      await getStudySession(url).then((data) => {
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
        <div className="ai-analysis-overview">
          <h3>Here is a Summary of the Youtube Video:</h3>
          <h4>Summary:</h4>
          <p>{transcript.summary}</p>
          <h4>Relevency on {new Date().toString()}:</h4>
          <p>{transcript.relevancy}</p>
          <h4>Technical aspects:</h4>
          <p>{transcript.technical}</p>
          <button onClick={generateStudySession}>Generate study session</button>
        </div>
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

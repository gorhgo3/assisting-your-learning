import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import {
  getYoutubeTranscript,
  getStudySession,
  addToStudyHistory,
  questionResponse,
  addStudy,
} from '../api'
import { useQuery } from '@tanstack/react-query'

function YoutubeOverview() {
  const [url, setUrl] = useState<string>('')
  const [transcript, setTranscript] = useState<string>('')
  const [studySession, setStudySession] = useState<string[]>([])

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
      <h4>Enter Youtube URL you want to watch</h4>
      <YoutubeForm handleSubmit={getAnalysis} />
      {/* {isLoading && <h4>Loading...</h4>} */}
      {/* {isError && <h4>Error</h4>} */}
      <button onClick={generateStudySession}>
        Generate a 3 hour study session
      </button>
      {transcript && (
        // handle the youtube responses here:
        <div className="">
          {transcript}
          <h4>Want to work with this response?</h4>
          <button onClick={addToStudyHistory}>
            Store this as a completed topic
          </button>
          <button onClick={() => questionResponse}>
            Question this response
          </button>
          {studySession.map((plan) => (
            <>
              <p>{plan}</p>
              <button onClick={() => addStudy(plan)}>add to study</button>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default YoutubeOverview

import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import {
  getYoutubeTranscript,
  getStudySessionPlan,
  addToStudyHistory,
  questionResponse,
} from '../api'

function YoutubeOverview() {
  const [analyseData, setAnalyseData] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // generate youtube transcript of the youtube video and set analyseData to result
  async function getAnalysis(url: string) {
    setLoading(true)
    const data = await getYoutubeTranscript(url)
    setAnalyseData(data)
    setLoading(false)
  }

  return (
    <div className="youtube-overview">
      <h4>Enter Youtube URL you want to watch</h4>
      <YoutubeForm handleSubmit={getAnalysis} />
      {loading && <h4>Loading...</h4>}
      {analyseData && (
        // handle the youtube responses here:
        <div className="">
          <p>{analyseData}</p>
          <h4>Want to work with this response?</h4>
          <button onClick={getStudySessionPlan}>
            Generate a 3 hour study session
          </button>
          <button onClick={addToStudyHistory}>
            Store this as a completed topic
          </button>
          <button onClick={questionResponse}>Question this response</button>
        </div>
      )}
    </div>
  )
}

export default YoutubeOverview

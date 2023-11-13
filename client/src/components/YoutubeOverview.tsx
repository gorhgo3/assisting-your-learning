import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import {
  getYoutubeTranscript,
  getStudySessionPlan,
  addToStudyHistory,
  questionResponse,
} from '../api'
import { useQuery } from '@tanstack/react-query'

function YoutubeOverview() {
  const [url, setUrl] = useState<string>('')
  const {
    data: analyseData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['youtubeTranscript'],
    queryFn: () => getYoutubeTranscript(url),
    // refetch: {enabled: false}
  })

  async function getAnalysis(url: string) {
    setUrl(url)
    refetch()
  }

  return (
    <div className="youtube-overview">
      <h4>Enter Youtube URL you want to watch</h4>
      <YoutubeForm handleSubmit={getAnalysis} />
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>Error</h4>}
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

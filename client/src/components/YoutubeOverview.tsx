import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import { getYoutubeTranscript } from '../api'

function YoutubeOverview() {
  const [analyseData, setAnalysiseData] = useState('')

  async function getAnalysis(url: string) {
    const data = await getYoutubeTranscript(url)
    setAnalysiseData(data)
  }

  return (
    <div className="youtube-overview">
      <h4>Enter Youtube URL you want to watch</h4>
      <YoutubeForm handleSubmit={getAnalysis} />
      <p>{analyseData}</p>
    </div>
  )
}

export default YoutubeOverview

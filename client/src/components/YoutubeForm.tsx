import React, { useState } from 'react'
import { getYoutubeTranscript } from '../api'

interface Props {
  handleSubmit: (url: string) => void
}

export function YoutubeForm(props: Props) {
  const [YTURL, setYTURL] = useState(
    `https://www.youtube.com/watch?v=QIyc6NKS5J0&ab_channel=ThePrimeagen`
  )

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.handleSubmit(YTURL)
  }

  return (
    <>
      <h4>Enter Youtube URL you want to watch</h4>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="YoutubeURL">YoutubeURL</label>
        <input
          onChange={(e) => setYTURL(e?.target.value)}
          name="YoutubeURL"
          type="text"
          placeholder="Enter Youtube URL"
          value={YTURL}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default YoutubeForm

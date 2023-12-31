import React, { useState } from 'react'
import { getYoutubeTranscript } from '../api'

interface Props {
  handleSubmit: (url: string) => void,
}

export function YoutubeForm(props:Props) {
  const [YTURL, setYTURL] = useState('')

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.handleSubmit(YTURL)
  }



  return (
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
  )
}

export default YoutubeForm

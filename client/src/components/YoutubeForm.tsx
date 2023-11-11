import React, { useState } from 'react'

export function YoutubeForm() {
  const [YTURL, setYTURL] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setYTURL(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('submit')
    // send client submit to server endpoints
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter Youtube URL you want to watch</h4>
      <label htmlFor="YoutubeURL">YoutubeURL</label>
      <input
        onChange={handleChange}
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

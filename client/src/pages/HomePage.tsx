import axios from 'axios'
import React, { useState } from 'react'
import YoutubeForm from '../components/YoutubeForm';

function HomePage() {
  const [YoutubeInfo, setYoutubeInfo] = useState('')

  async function fetchData(event: React.FormEvent<HTMLFormElement>) {
    try {
      const response = await axios.get('http://localhost:3000/learning/');
      console.log(response.data);
    } catch (error) {
      console.error(error)
    }
  }
    
  return (
    <>
      <h4>HomePage</h4>
      <p>
        Assisting your personal developement journey. Learn to learn - Spend
        your study hours focused on learning. Get the most from your invested
        hours.
      </p>
      <p>
        {' '}
        Save time by filtering Youtube videos by the relevency to todays ever
        changing Tech Industry.
      </p>
      <h1>
        Get started with our new Tool.{' '}
        <span style={{ fontSize: '1.5rem' }}>
          Only watch YouTube tutorials that keep up to date with the Tech
          Industries latest standards.
        </span>
      </h1>
      <YoutubeForm/>

      {/* <form onSubmit={fetchData}>
        <label htmlFor="YoutubeURL">Youtube URL</label>
        <input name="YoutubeURL" type="text" placeholder="Enter Youtube URL" />
        <button>Submit</button>
      </form> */}
      <p className="info">{YoutubeInfo}</p>
    </>
  )
}

export default HomePage

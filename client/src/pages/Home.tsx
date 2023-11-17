import axios from 'axios'
import React, { useState } from 'react'
import YoutubeForm from '../components/YoutubeForm'
import { Link } from 'react-router-dom'
import YoutubeOverview from '../components/YoutubeOverview'
import Header from '../components/Header'

function HomePage() {
  const [YoutubeInfo, setYoutubeInfo] = useState('')

  async function fetchData(event: React.FormEvent<HTMLFormElement>) {
    try {
      console.log('feching data')
      const response = await axios.get('http://localhost:3000/learning/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <Header/>
    <div className="content">
        <h1>Welcome to StudyBuddy</h1>
        <p>Let AI assist in the process of learning. Get the most from your invested study hours.</p>
        <p>Save time by filtering YouTube videos relevant to today's ever-changing tech industry.</p>
        <p>Get started with our new tool. Only watch YouTube tutorials that keep up with the latest tech standards.</p>
        <Link to="/login/app">Login</Link>
        <YoutubeOverview/>
      <p className="info">{YoutubeInfo}</p>
      </div>
    </>
  )
}

export default HomePage

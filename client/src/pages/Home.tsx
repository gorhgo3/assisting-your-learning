import { Link } from 'react-router-dom'
import YoutubeOverview from '../components/YoutubeOverview'
import Header from '../components/Header'

function HomePage() {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Welcome to StudyBuddy</h1>
        <p>
          Let AI assist in the process of learning. Get the most from your
          invested study hours.
        </p>
        <p>
          Save time by filtering YouTube videos relevant to today's
          ever-changing tech industry.
        </p>
        <p>
          Get started with our new tool. Only watch YouTube tutorials that keep
          up with the latest tech standards.
        </p>
        <Link to="/login/app">Login</Link>
        <YoutubeOverview />
      </div>
    </>
  )
}

export default HomePage

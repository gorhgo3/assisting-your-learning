import { Link } from 'react-router-dom'
import YoutubeOverview from '../components/YoutubeOverview'
import Header from '../components/Header'

function HomePage() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="">
        <h1 className="title display-1 mt-5 mx-5">Welcome to Murrays Study-Buddy</h1>
        <h4 className="title-sub m-5">
          <del className='title-sub--negative'>Watch the whole video</del> nope.✅ Develop a Plan✅ Spend time productively✅
        </h4>
        <p className="m-5">
          Let AI assist in the process of learning. Get the most from your
          invested study hours. <br />
          Save time by filtering YouTube videos relevant to today's
          ever-changing tech industry. <br />
          Get started with our new tool. Only watch YouTube tutorials that keep
          up with the latest tech standards.
        </p>
        {/* <Link to="/login/app">Login</Link>
        <YoutubeOverview /> */}
        </div>
      </div>
    </>
  )
}

export default HomePage

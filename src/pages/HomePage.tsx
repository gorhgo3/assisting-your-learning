import axios from 'axios'

function HomePage() {

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3000/learning/');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
    
  fetchData()
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

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="YoutubeURL">Youtube URL</label>
        <input name="YoutubeURL" type="text" placeholder="Enter Youtube URL" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default HomePage

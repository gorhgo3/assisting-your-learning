import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import {
  getYoutubeTranscript,
  getStudySession,
  addToStudyHistory,
  questionResponse,
} from '../api'
import { useQuery } from '@tanstack/react-query'

// const tempData = `
// - Interactive Learning: Many learning platforms and resources provide interactive coding exercises and challenges to engage learners actively.
// - Hands-on Projects: Learning by building projects is a popular approach as it allows learners to apply their knowledge in practical scenarios.
// - Online Tutorials and Courses: Online learning platforms offer a wide range of coding tutorials and courses that cover various programming languages and concepts.
// - Collaboration and Community: Learners are encouraged to join coding communities, participate in forums, and collaborate with other learners to enhance their coding skills.
// - Continuous Practice: Consistent practice is key to mastering coding. Learners are advised to practice regularly to reinforce their knowledge and improve coding proficiency.
// - Documentation and Stack Overflow: Modern coding practices involve utilizing documentation and online resources like Stack Overflow to troubleshoot issues, find solutions, and seek help from the developer community.

// Please provide the transcript, and I'll be happy to assist you further.
// `

const DEFAULT_URL =
  'https://www.youtube.com/watch?v=QIyc6NKS5J0&ab_channel=ThePrimeagen'

const DEFAULT_RESULT =
  "The speaker has been programming professionally for almost two decades and has experience in various programming languages. - In 2007-2008, the speaker was primarily using Windows for programming but wanted to get better at Linux. - They initially avoided using Linux because they perceived it as difficult and outdated. - The speaker realized that their mentality of assuming that things with friction or difficulty were wrong hindered their progress. - They regret not being open to learning and using different tools and technologies earlier in their career. - The speaker shares a story about an interview where they wrote a complex Java code to solve a problem that could have been easily solved with grep. - They emphasize the importance of being open to uncomfortable and unfamiliar tools and technologies. - The speaker encourages viewers to try different editors, operating systems, and frameworks to expand their knowledge and problem-solving abilities. - They highlight the importance of gaining diverse experiences and perspectives to become a better engineer. - The video concludes with a call to subscribe to the channel and share personal stories. As for the relevance to modern learning to code practices, the video emphasizes the importance of being open to new technologies and tools, which is still relevant today. The speaker encourages viewers to expand their knowledge and problem-solving abilities by trying different editors and frameworks, which aligns with the idea of learning multiple tools in order to become a well-rounded developer. However, it's worth noting that the specific tools and technologies mentioned (e.g., NetBeans, vim, grep) may not be the most up-to-date or commonly used in the industry today"

function YoutubeOverview() {
  const [url, setUrl] = useState<string>(DEFAULT_URL)
  const [transcript, setTranscript] = useState<string>('')
  const [studySession, setStudySession] = useState<string[]>([])

  // const { data, isLoading, isError, refetch } = useQuery({
  //   queryKey: ['youtubeTranscript'],
  //   queryFn: () => getYoutubeTranscript(url),
  //   enabled: false,
  // })

  async function getAnalysis(url: string) {
    setUrl(url)
    getYoutubeTranscript(url).then((data) => {
      setTranscript(data)
    })
    // refetch()
  }

  async function generateStudySession(session: any) {
    console.log('data')
    try {
      await getStudySession(transcript).then((data) => {
        const points = data.answer.split('-')
        setStudySession(points)
        return points
      })
    } catch (error) {
      console.error(error)
    }
  }
  console.log(studySession)

  return (
    <div className="youtube-overview">
      <h4>Enter Youtube URL you want to watch</h4>
      <YoutubeForm handleSubmit={getAnalysis} />
      {/* {isLoading && <h4>Loading...</h4>} */}
      {/* {isError && <h4>Error</h4>} */}
      <button onClick={generateStudySession}>
        Generate a 3 hour study session
      </button>
      {transcript && (
        // handle the youtube responses here:
        <div className="">
          {transcript}
          <h4>Want to work with this response?</h4>
          <button onClick={addToStudyHistory}>
            Store this as a completed topic
          </button>
          <button onClick={() => questionResponse}>
            Question this response
          </button>
        </div>
      )}
      {studySession}
    </div>
  )
}

export default YoutubeOverview

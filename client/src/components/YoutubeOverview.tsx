import YoutubeForm from './YoutubeForm'
import { useState } from 'react'
import {
  getYoutubeTranscript,
  getStudySession,
  addToStudyHistory,
  questionResponse,
  addStudy,
} from '../api'
import { useQuery } from '@tanstack/react-query'

const tempData = `
Summary: The transcript provides nine key lessons for people who are starting to learn programming. It emphasizes that there is more to life than working at big tech companies, and that smaller companies and startups can offer more engaging and fulfilling work. It emphasizes the importance of mastering the fundamentals of programming, as they will remain consistent, even as frameworks and tools change. Real-world experience is highlighted as the best teacher, and networking is emphasized as a way to open doors and gain insights. The transcript also addresses imposter syndrome and the importance of recognizing it as a common struggle. Collaboration and teamwork skills are seen as crucial in the professional world, and the transcript advises starting as a generalist before specializing in a specific area. It concludes by encouraging lifelong learning and the importance of project-based learning to reinforce knowledge and gain practical insights. Key Points: 1. There is more to life than working at big tech companies. 2. Master the fundamentals of programming. 3. Real-world experience is the best teacher. 4. Network and build genuine relationships. 5. Recognize and acknowledge imposter syndrome. 6. Collaboration and teamwork skills are crucial. 7. Start as a generalist before specializing. 8. Embrace lifelong learning and adaptability. 9. Project-based learning reinforces knowledge and provides practical insights. Modern Learning to Code Practises: The key points and lessons provided in the transcript are relevant and up-to-date with modern learning to code practices. The emphasis on mastering the fundamentals, gaining real-world experience through projects, and developing collaboration and teamwork skills align with current best practices. The advice to start as a generalist before specializing, acknowledging imposter syndrome, and embracing lifelong learning are also in line with modern approaches to learning programming.`

const DEFAULT_URL =
  'https://www.youtube.com/watch?v=QIyc6NKS5J0&ab_channel=ThePrimeagen'

const DEFAULT_RESULT =
  "The speaker has been programming professionally for almost two decades and has experience in various programming languages. - In 2007-2008, the speaker was primarily using Windows for programming but wanted to get better at Linux. - They initially avoided using Linux because they perceived it as difficult and outdated. - The speaker realized that their mentality of assuming that things with friction or difficulty were wrong hindered their progress. - They regret not being open to learning and using different tools and technologies earlier in their career. - The speaker shares a story about an interview where they wrote a complex Java code to solve a problem that could have been easily solved with grep. - They emphasize the importance of being open to uncomfortable and unfamiliar tools and technologies. - The speaker encourages viewers to try different editors, operating systems, and frameworks to expand their knowledge and problem-solving abilities. - They highlight the importance of gaining diverse experiences and perspectives to become a better engineer. - The video concludes with a call to subscribe to the channel and share personal stories. As for the relevance to modern learning to code practices, the video emphasizes the importance of being open to new technologies and tools, which is still relevant today. The speaker encourages viewers to expand their knowledge and problem-solving abilities by trying different editors and frameworks, which aligns with the idea of learning multiple tools in order to become a well-rounded developer. However, it's worth noting that the specific tools and technologies mentioned (e.g., NetBeans, vim, grep) may not be the most up-to-date or commonly used in the industry today"

function YoutubeOverview() {
  const [url, setUrl] = useState<string>(DEFAULT_URL)
  const [transcript, setTranscript] = useState<string>(tempData)
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
        const points = data.answer.split('\n')
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
          {studySession.map((plan) => (
            <>
              <p>{plan}</p>
              <button onClick={() => addStudy(plan)}>add to study</button>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default YoutubeOverview

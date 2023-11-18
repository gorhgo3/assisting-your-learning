import { useQuery } from '@tanstack/react-query'
import Header from '../components/Header'
import { fetchUserDetails } from '../api'

function Profile() {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchUserDetails(),
    queryKey: ['user'],
  })

  if (isLoading) return <h1>Loading..</h1>
  if (isError) return <h1>Error</h1>
  if (data) {
    const { nickname, studying, study_topics } = data
    return (
      <>
        <Header />
        <div className="content">
          <h1>{nickname}</h1>
          <p>
            We noticed you last set your study status to:
            <strong>{studying}</strong>
            {study_topics.map((topic: string) => (
              <p key={topic}>{topic}</p>
            ))}
          </p>
        </div>
      </>
    )
  }
}

export default Profile

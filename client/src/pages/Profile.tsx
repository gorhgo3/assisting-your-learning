import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUserDetails } from '../functions/userDetails'

function Profile() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getUserDetails,
    queryKey: ['user'],
  })

  if (isLoading) return <h1>Loading..</h1>
  if (isError) return <h1>Error</h1>
  if (data)
    return (
      <>
        <div className="content">
          <h1>{data.nickname}</h1>
          <p>
            We noticed you last set your study status to:
            <strong>{data.studying}</strong>
          </p>
        </div>
      </>
    )
}

export default HomePage

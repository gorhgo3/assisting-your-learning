import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { getUserDetails } from '../functions/userDetails'

function Header() {

  const {data, isLoading, isError} = useQuery({
    queryFn: getUserDetails,
    queryKey: ['user'],
  })
  
  return (
    <div className="header">
      <h3 style={{ display: 'inline' }}>StudyBuddy</h3>
      <Link className="header-link" to={'/'}>
        Home
      </Link>
      <Link className="header-link" to={'/searching'}>
        Check video
      </Link>
      <Link className="header-link" to={'/personal/app'}>
        {data?.nickname}
        {isError}
      </Link>
    </div>
  )
}

export default Header

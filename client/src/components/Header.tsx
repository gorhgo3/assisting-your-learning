import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
        placeholder
      </Link>
    </div>
  )
}

export default Header

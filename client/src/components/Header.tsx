import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h3 style={{display:"inline"}}>StudyBuddy</h3>
      <Link to={'/personal/app'}>Personal</Link>
      <Link to={'/test'}>Explore</Link>
      <Link to={'/login'}>Login(notWorking)</Link>
    </div>
  )
}

export default Header

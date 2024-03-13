import React, { useState } from 'react'
import './navbar.scss'
import { Close, Menu, Villa } from '@mui/icons-material'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className='leftSide'>
        <a href="/" className='logo'>
          <Villa className='img' />
          <span>AsnEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Agency</a>
        <a href="">Contact</a>
      </div>
      <div className='rightSide'>
        <a href="/">Sign In</a>
        <a href="/" className='signup'>Sign Up</a>
        <div className='menu'>
          {open ? <Close className='img' onClick={() => setOpen(!open)} /> : <Menu onClick={() => setOpen(!open)} />}
        </div>
        <div className={open ? 'Menu active' : 'Menu'}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Agency</a>
          <a href="">Contact</a>
          <a href="">sign in</a>
          <a href="">sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

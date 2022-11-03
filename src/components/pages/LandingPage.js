import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../../src/images/bb-crop.gif'


const LandingPage = () => {
  return (
    <main className='landing-page'>
      <h1 className='lp-title'>Welcome to the Wonderful World of Breaking Bad</h1>
      <p className='hero-text'>CLICK</p>
      <div className='hero'>
        <Link to='/characters' className='walter-image'>
          <img
            src={Hero}
            className="d-inline-block align-top"
            alt="Logo"
          /></Link>
        <p className='hero-text'>WALTER</p>
      </div>
      <h3 className='lp-subtitle'>...to see all characters in the show</h3>
    </main>
  )
}

export default LandingPage
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <main className='landing-page'>
      <div className='hero'>
        <Link to='/characters' className='find-btn btn btn-main btn-warning'>Find your Meth Head</Link>
      </div>
    </main>
  )
}

export default LandingPage
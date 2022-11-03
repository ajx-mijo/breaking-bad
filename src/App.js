

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import MainFooter from './components/common/MainFooter'
import MainNavBar from './components/common/MainNavBar'
import CharacterIndex from './components/pages/CharacterIndex'
import CharacterSingle from './components/pages/CharacterSingle'
import LandingPage from './components/pages/LandingPage'
import NotFound from './components/pages/NotFound'



const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/characters' element={<CharacterIndex />} />
          <Route path='/character/:charId' element={<CharacterSingle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
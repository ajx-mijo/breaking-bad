/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import DeathEndpoint from '../common/DeathEndpoint'
import QuotesEndpoint from '../common/QuotesEndpoint'
import Spinner from '../common/Spinner'
const CharacterSingle = () => {

  const [characters, setCharacters] = useState([])
  const [errors, setErrors] = useState(false)
  const [appearances, setAppearances] = useState([])
  const [occupation, setOccupation] = useState([])

  const { charId } = useParams()

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${charId}`)
        const targetData = data[0]
        setCharacters(targetData)
      } catch (error) {
        console.log(error)
        setErrors(error)
      }
    }
    getCharacter()
  }, [charId])


  useEffect(() => {
    const app1 = characters.appearance
    const app2 = { ...app1 }
    const fixedApp = Object.values(app2)
    const finalApp = fixedApp.join(', ')
    setAppearances(finalApp)
  }, [characters])

  useEffect(() => {
    const occ1 = characters.occupation
    const occ2 = { ...occ1 }
    const fixedOcc = Object.values(occ2)
    const finalOcc = fixedOcc.join(', ')
    setOccupation(finalOcc)
  }, [characters])


  return (
    <main className='char-single-page'>
      <Container className='single-container'>
        {appearances ?
          <>
            <Row className='single-row'>
              <div className='return-btn'>
                <Link to="/characters" className='btn btn-main btn-warning m-4 w-25'>Return to Characters</Link>
              </div>
              <Col className='char-card'>
                <h2 className='mb-4'>Portrayed by: {characters.portrayed}</h2>
                <img className='single-image' src={characters.img} alt={characters.name} />
              </Col>
              <Col className='char-bio char-card'>
                <h1>{characters.name}</h1><QuotesEndpoint characters={characters} />
                <hr />
                <h3>Nickname: {characters.nickname}</h3>
                <hr />
                <h3>Occupation: {occupation}</h3>
                <hr />
                {characters.status === 'Deceased' ? <h3 className='death-display'>{characters.status}</h3> : <h3 className='alive-display'>{characters.status}</h3>}
                <DeathEndpoint characters={characters} />
                <hr />
                <h3>Series appeared in: {appearances}</h3>
              </Col>
            </Row>
          </>
          :
          errors ? <h2>This site has been closed by the DEA, your IP address is now being tracked by our agents...</h2> : <h2 className='spinner-2'>Cooking...</h2>
        }
      </Container>
    </main >
  )
}

export default CharacterSingle
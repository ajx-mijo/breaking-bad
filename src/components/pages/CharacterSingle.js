/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


const CharacterSingle = () => {


  // State
  const [characters, setCharacters] = useState([])
  const [errors, setErrors] = useState(false)

  // Params/ID

  const { charId } = useParams()

  // Execution

  useEffect(() => {
    const getCharacter = async () => {
      console.log('Hi')
      try {
        const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${charId}`)
        const targetData = data[0]
        setCharacters(targetData)
        console.log(targetData)
      } catch (error) {
        console.log(error)
        setErrors(error)
      }
    }
    getCharacter()
  }, [charId])

  // useEffect(() => {
  //   const occupation = characters.occupation.join(' ')
  //   console.log('occupation->', occupation)
  // }, [characters])

  return (
    <main className='char-single-page'>
      <Container>
        {characters ?
          <>
            <Row>
              <div className='return-btn'>
                <Link to="/characters" className='btn btn-main btn-warning m-4 w-25'>Return to Characters</Link>
              </div>
              <Col sm='12' md='6'>
                <h1 className='mb-4'>{characters.name}</h1>
                <img className='single-image' src={characters.img} alt={characters.name} />
              </Col>
              <Col sm='12' md='6'>
                <h2>{characters.name}</h2><button>I will tell you something...</button>
                <hr />
                <h3>Nickname: {characters.nickname}</h3>
                <hr />
                <h3>Occupation: {characters.occupation}</h3> <h3 className='status-display'>Status {characters.status}</h3>
                <hr />
                <h3>Series appeared in: {characters.appearance}</h3>
              </Col>
            </Row>
          </>
          :
          errors ? <h2>This site has been closed by the DEA, your IP address is now being tracked by our agents...</h2> : <h2>Loading...</h2>
        }
      </Container>
    </main >
  )
}

export default CharacterSingle
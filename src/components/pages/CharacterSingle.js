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
  const [deathInfo, setDeathInfo] = useState([])
  const [filteredDeathInfo, setFilteredDeathInfo] = useState([])
  // Params/ID

  const { charId } = useParams()

  // Execution

  useEffect(() => {
    setFilteredDeathInfo(null)
    const getCharacter = async () => {
      try {
        const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${charId}`)
        const targetData = data[0]
        setCharacters(targetData)
        // console.log('target character in og function ->', targetData)
      } catch (error) {
        console.log(error)
        setErrors(error)
      }
    }
    getCharacter()
  }, [charId])

  useEffect(() => {
    const getDeathData = async () => {
      try {
        const { data } = await axios.get('https://breakingbadapi.com/api/deaths')
        setDeathInfo(data)
        console.log('death data ->', data)
      } catch (error) {
        console.log(error)
        setErrors(error)
      }
    }
    getDeathData()
  }, [characters])

  useEffect(() => {
    const sortDeath = () => {
      const vitalInfo = deathInfo.filter(info => {
        if (info.death === characters.name) {
          return {
            victim: info.death,
            manner: info.cause,
          }
        }
      })
      const newVitalInfo = vitalInfo[0]
      setFilteredDeathInfo(newVitalInfo)
    }
    sortDeath()
  }, [deathInfo, characters])




  return (
    <main className='char-single-page'>
      <Container>
        {characters && deathInfo ?
          <>
            <Row className='single-row'>
              <div className='return-btn'>
                <Link to="/characters" className='btn btn-main btn-warning m-4 w-25'>Return to Characters</Link>
              </div>
              <Col className='mb-4 char-card'>
                <h2 className='mb-4'>Portrayed by: {characters.portrayed}</h2>
                <img className='single-image' src={characters.img} alt={characters.name} />
              </Col>
              <Col className='mb-4 char-bio char-card'>
                <h1>{characters.name}</h1><button className='btn btn-main btn-danger'>Let me tell you something...</button>
                <hr />
                <h3>Nickname: {characters.nickname}</h3>
                <hr />
                <h3>Occupation: {characters.occupation}</h3>
                <hr />
                {characters.status === 'Deceased' ? <h3 className='death-display'>{characters.status}</h3> : <h3 className='alive-display'>{characters.status}</h3>}
                {filteredDeathInfo ? filteredDeathInfo.death === characters.name && <h2>{filteredDeathInfo.cause}</h2> : <h2></h2>}
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
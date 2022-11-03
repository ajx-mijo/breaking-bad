/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Filters from '../common/Filters'
import Spinner from '../common/Spinner'

const CharacterIndex = () => {


  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://breakingbadapi.com/api/characters')
        setCharacters(data)
        setFilteredCharacters(data)
        console.log()
      } catch (err) {
        console.log(err.message)
      }
    }
    getData()
  }, [])


  return (
    <main className='char-index-page'>
      <Container className='mt-4'>
        <Row>
          {filteredCharacters ?
            <>
              <Filters characters={characters} setFilteredCharacters={setFilteredCharacters} filteredCharacters={filteredCharacters} />
              {filteredCharacters.map(char => {
                const { name, char_id, nickname, img } = char
                return (
                  <Col key={char_id} sm='6' md='3' className='char-card mb-4'>
                    <Link className='text-decoration-none' to={`/character/${char_id}`}>
                      <Card>
                        <div className='card-image' style={{ backgroundImage: `url(${img})` }}></div>
                        <Card.Body>
                          <h4>{name}</h4>
                          <p>{nickname}</p>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </>
            :
            <h2>LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading</h2>
          }
        </Row>
      </Container>
    </main>
  )
}

export default CharacterIndex
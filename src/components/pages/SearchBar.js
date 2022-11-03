import { useState } from 'react'
import axios from 'axios'

const SearchBar = () => {

  const [characters, setCharacters] = useState()
  const [filterCharacters, setFilterCharacters] = useState()

  const getCharacters = async () => {
    try {
      const { data } = await axios.get('https://breakingbadapi.com/api/characters')
      setFilterCharacters(data)
    } catch (error) {
      console.log(error)
    }
  }
  getCharacters()


  const handleChange = (e) => {
    const newCharctersArray = { ...filterCharacters }
  }


  return (
    <>
      <input type="text" placeholder="Search here" onChange={handleChange} />
      <select name='filter' id='filter'>
        <option value='All'>Dead or Alive</option>
        <option value='Alive'>Alive</option>
        <option value='Unknown'>Unknown</option>
        <option value='Dead'>Dead</option>
      </select>
    </>
  )
}

export default SearchBar
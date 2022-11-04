
import { useEffect, useState } from 'react'


const Filters = ({ characters, filteredCharacters, setFilteredCharacters }) => {

  const [filterInput, setFilterInput] = useState({
    search: '',
    status: 'All',
    category: 'All',
  })

  useEffect(() => {
    const regex = new RegExp(filterInput.search, 'i')
    const filteredArray = characters.filter(char => {
      return regex.test(char.name) && (char.category === filterInput.category || filterInput.category === 'All') && (char.status === filterInput.status || filterInput.status === 'All')

    })
    setFilteredCharacters(filteredArray)
  }, [filterInput, characters, setFilteredCharacters])

  const searchCompare = (e) => {
    let search = ''
    search = e.target.value
    const regex = new RegExp(search, 'i')
    console.log('search ->', search)
    const searched = filteredCharacters.filter(char => {
      const { name } = char
      return (name === search && regex.test(search))
    })
    setFilteredCharacters(searched)
  }

  const handleChange = (e) => {
    setFilterInput({ ...filterInput, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='search-function'>
        <input onChange={handleChange} type='text' placeholder="Search name here" name='search' id='filter' value={filterInput.search} />
        <select onChange={handleChange} name='status' id='filter' value={filterInput.status}>
          <option value='All'>Dead or Alive</option>
          <option value='Alive'>Alive</option>
          <option value='Presumed dead'>Presumed dead</option>
          <option value='Deceased'>Deceased</option>
        </select>
        <select onChange={handleChange} name='category' id='filter' value={filterInput.category}>
          <option value='All'>Series</option>
          <option value='Breaking Bad'>Breaking Bad</option>
          <option value='Better Call Saul'>Better Call Saul</option>
        </select>
      </div>
    </>
  )
}

export default Filters
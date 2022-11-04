import { useState, useEffect } from 'react'
import axios from 'axios'


const QuotesEndpoint = ({ characters }) => {

  const [quotes, setQuotes] = useState([])
  const [filteredQuotes, setFilteredQuotes] = useState([])
  const [click, setClick] = useState(false)




  useEffect(() => {
    const getQuotes = async () => {
      try {
        const { data } = await axios.get('https://www.breakingbadapi.com/api/quotes')
        setQuotes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getQuotes()
  }, [characters])

  useEffect(() => {
    const sortQuotes = quotes.filter(quote => {
      if (quote.author === characters.name)
        return quote
    })
    const randomQuote = sortQuotes[Math.floor(Math.random() * sortQuotes.length)]
    setFilteredQuotes(randomQuote)
  }, [quotes, characters, click])


  const handleClick = (e) => {
    setClick(false)
    setClick({ ...click, [e.target.name]: e.target.value })
  }

  return (
    <>
      {filteredQuotes ? <button onClick={handleClick} className='btn btn-main btn-danger' name='clicked' value={true}>Let me tell you something...</button> : <></>}
      {filteredQuotes && click ? filteredQuotes.author === characters.name && <h2>{filteredQuotes.quote}</h2> : <h2></h2>}
    </>
  )
}

export default QuotesEndpoint
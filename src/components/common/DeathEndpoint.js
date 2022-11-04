import { useState, useEffect } from 'react'
import axios from 'axios'

const DeathEndpoint = ({ characters }) => {

  const [deathInfo, setDeathInfo] = useState([])
  const [filteredDeathInfo, setFilteredDeathInfo] = useState([])

  useEffect(() => {
    const getDeathData = async () => {
      try {
        const { data } = await axios.get('https://breakingbadapi.com/api/deaths')
        setDeathInfo(data)
      } catch (error) {
        console.log(error)
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
    <>
      {filteredDeathInfo ? filteredDeathInfo.death === characters.name && <h2>{filteredDeathInfo.cause}</h2> : <h2></h2>}
    </>
  )
}

export default DeathEndpoint 
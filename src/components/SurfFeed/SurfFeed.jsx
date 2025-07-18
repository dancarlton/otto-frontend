import './SurfFeed.css'
import SurfCard from '../SurfCard/SurfCard'
import {  useEffect, useState } from 'react'
import { fetchSurfSpots } from '../../utils/api'
import Preloader from '../Preloader/Preloader'

export default function SurfFeed({backgroundImage}) {
  const [spots, setSpots] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('jwt')

    fetchSurfSpots(token)
      .then(setSpots)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Preloader />

  return (
    <section className='surf-spot' style={{backgroundImage: `url(${backgroundImage})`}}>
      <h2 className='surf-spot__title'>Surf Feed</h2>
      <ul className='surf-spot__grid'>
        {spots
          .filter(
            spot =>
              spot.buoyData?.waveHeight && spot.buoyData.waveHeight !== 'N/A'
          )
          .map(spot => (
            <li className='surf-spot__card' key={spot._id}>
              <SurfCard spot={spot} />
            </li>
          ))}
      </ul>
    </section>
  )
}

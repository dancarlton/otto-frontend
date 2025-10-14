import './SurfFeed.css'
import SurfCard from '../SurfCard/SurfCard'
import { useEffect, useState } from 'react'
import { fetchSurfSpots } from '../../utils/api'
import Preloader from '../Preloader/Preloader'
import WakingUpModal from '../WakingUpModal/WakingUpModal'

export default function SurfFeed({ backgroundImage }) {
  const [spots, setSpots] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('jwt')

    fetchSurfSpots(token)
      .then(setSpots)
      .finally(() => setLoading(false))
  }, [])

  // if still checking auth after wake-up
  if (loading) {
    return (
      <Preloader />
      // <WakingUpModal
      //   isOpen={true}
      //   // onClose={closeActiveModal}
      //   title='🏄 Otto’s checking today’s lineup…'
      //   subtitle='Hang tight — surf spots loading now.'
      // />
    )
  }

  return (
    <section
      className='surf-spot'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='surf-spot__container'>
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
      </div>
    </section>
  )
}

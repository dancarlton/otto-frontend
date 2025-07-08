import './SurfFeed.css'
import surfSpots from '../../data/surfSpots.json'
import SurfCard from '../SurfCard/SurfCard'

export default function SurfFeed() {
  return (
    <section className="surf-spot">
      <h2 className="surf-spot__title">Surf Feed</h2>
      <div className="surf-spot__grid">
        {surfSpots.map(spot => (
          <SurfCard key={spot.id} spot={spot} />
        ))}
      </div>
    </section>
  )
}

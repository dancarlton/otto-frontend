import './SurfCard.css'

export default function SurfCard({ spot }) {
const imageUrl = `https://source.unsplash.com/featured/400x300/?surf,${encodeURIComponent(
  spot.spot
)}&sig=${encodeURIComponent(spot.spot)}`

  return (
    <div className='surf-card'>
      <img src={imageUrl} alt={spot.spot} className='surf-card__img' />
      <div className='surf-card__overlay'>
        <p className='surf-card__wave'>{spot.waveHeight || 'N/A'}</p>
        <p className='surf-card__match'>Match: {spot.match || 'N/A'}</p>
        <h3 className='surf-card__name'>{spot.spot}</h3>
        <p className='surf-card__details'>
          Board: {spot.board || 'N/A'} | Wetsuit: {spot.wetsuit || 'N/A'} | Best
          Time: {spot.bestTime || 'N/A'}
        </p>
      </div>
    </div>
  )
}

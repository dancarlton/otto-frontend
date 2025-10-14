import './Preloader.css'
import Lottie from 'lottie-react'
import spinner from '../../assets/surfing-poodle-loading.json'

export default function Preloader() {
  return (
    <div className='preloader'>
      <Lottie className='preloader__animation' animationData={spinner} />
      <p className='preloader__text'>Loading...</p>
    </div>
  )
}

import Main from '../components/Main/Main'
import SurfFeed from '../components/SurfFeed/SurfFeed'
import waveBanner from '../assets/images/wave-banner.jpg'

export default function HomePage() {
  return (
    <div>
      <Main />
      <SurfFeed backgroundImage={waveBanner} />

    </div>
  )
}

import { useState } from 'react'
import './Main.css'

export default function Main() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className='main'>
      <p className='main__chat'>Start chatting today ^^^ </p>
      <h1>Welcome to Otto!</h1>
      <div className='surf-edit'>
        {!isPlaying ? (
          <div
            className='surf-edit__preview'
            onClick={() => setIsPlaying(true)}
          >
            <img
              src='https://img.youtube.com/vi/5MzE-fT0jvI/maxresdefault.jpg'
              alt='Chippa Wilson surf edit'
              className='surf-edit__thumbnail'
            />
            <div className='surf-edit__overlay'>
              <h2>Surf Edit of the Week</h2>
              <button className='surf-edit__play'>▶</button>
            </div>
          </div>
        ) : (
          <iframe
            className='surf-edit__iframe'
            src='https://www.youtube.com/embed/5MzE-fT0jvI?autoplay=1&rel=0'
            title='Chippa Wilson Surf Edit'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
          ></iframe>
        )}
      </div>
    </main>
  )
}

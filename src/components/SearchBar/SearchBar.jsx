import { useEffect, useState } from 'react'
import './SearchBar.css'
import { FiSearch } from 'react-icons/fi'
import ChatBox from '../ChatBox/ChatBox'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (query.trim()) {
      setIsChatOpen(true)
    }
  }

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isChatOpen])

  return (
    <>
      <form className='searchbar' onSubmit={handleSubmit}>
        <input
          type='text'
          className='searchbar__input'
          placeholder='Where should I surf tomorrow morning?'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type='submit' className='searchbar__button'>
          <FiSearch size={18} />
        </button>
      </form>

      {isChatOpen && (
        <>
          <div className='chatbox__backdrop' />
          <div className='chatbox__overlay'>
            <button
              className='chatbox__close'
              onClick={() => setIsChatOpen(false)}
            >
              ✕
            </button>
            <ChatBox initalMessage={query} />
          </div>
        </>
      )}
    </>
  )
}

import { useContext, useEffect, useState } from 'react'
import './SearchBar.css'
import { FiSearch } from 'react-icons/fi'
import ChatBox from '../ChatBox/ChatBox'
import CurrentUserContext from '../../contexts/CurrentUserContexts'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false)

  const {isLoggedIn, isOnboarded, setActiveModal } = useContext(CurrentUserContext)

  const handleSubmit = e => {
    e.preventDefault()

    if (!isLoggedIn || !isOnboarded) {
      setActiveModal('register')
      return
    }

    if (query.trim()) {
      setActiveQuery(query)
      setIsChatOpen(true)
      setQuery('')
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
          placeholder='Best time to surf in Malibu?'
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
            <ChatBox initialMessage={activeQuery} />
          </div>
        </>
      )}
    </>
  )
}

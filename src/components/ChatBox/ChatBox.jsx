import { askOtto } from '../../utils/api'
import './ChatBox.css'
import { useEffect, useRef, useState } from 'react'

export default function ChatBox({ initialMessage }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const hasSentInitial = useRef(false) // 🛡️ flag to block duplicate sends

  const sendMessage = async (messageOverride, skipUserEcho = false) => {
    const message = messageOverride || input
    if (!message.trim()) return

    const token = localStorage.getItem('jwt')
    if (!skipUserEcho) {
      setMessages(prev => [...prev, { sender: 'user', text: message }])
    }
    setInput('')

    try {
      const data = await askOtto(message, token)
      setMessages(prev => [...prev, { sender: 'otto', text: data.reply }])
    } catch (error) {
      console.error('Error chatting with Otto:', error)
      setMessages(prev => [
        ...prev,
        { sender: 'otto', text: 'Oops! Otto wiped out 🏄‍♂️' },
      ])
    }
  }

  // MOCK RESPONSE FOR TESTING
  // const sendMessage = async (messageOverride, isInitial = false) => {
  //   const message = typeof messageOverride === 'string' ? messageOverride : input
  //   if (!message.trim()) return

  //   if (!isInitial) {
  //     setMessages(prev => [...prev, { sender: 'user', text: message }])
  //   }

  //   if (!messageOverride) setInput('')

  //   if (isInitial) return

  //   const mockReply = `Tomorrow I recommend surfing at Trestles around 6 AM. Conditions look great for an intermediate surfer like you.`

  //   setTimeout(() => {
  //     setMessages(prev => [...prev, { sender: 'otto', text: mockReply }])
  //   }, 500)
  // }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  useEffect(() => {
    if (initialMessage && !hasSentInitial.current) {
      hasSentInitial.current = true
      setMessages([{ sender: 'user', text: initialMessage }])
      sendMessage(initialMessage, true)
    }
  }, [initialMessage])

  return (
    <div className='chatbox'>
      <div className='chatbox__messages'>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chatbox__message chatbox__message--${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className='chatbox__input'>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Ask Otto about the surf...'
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

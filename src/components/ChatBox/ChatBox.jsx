import './ChatBox.css'
import { useEffect, useState } from 'react'

export default function ChatBox({ initialMessage }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  // const sendMessage = async (messageOverride) => {
  //   const message = messageOverride || input;
  //   if (!message.trim()) return;

  //   const token = localStorage.getItem("jwt");
  //   setMessages((prev) => [...prev, { sender: "user", text: message }]);
  //   setInput("");

  //   try {
  //     const response = await fetch("http://localhost:3001/api/gpt/chat", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ message }),
  //     });

  //     const data = await response.json();
  //     setMessages((prev) => [...prev, { sender: "otto", text: data.reply }]);
  //   } catch (error) {
  //     console.error("Error chatting with Otto:", error);
  //     setMessages((prev) => [
  //       ...prev,
  //       { sender: "otto", text: "Oops! Otto wiped out 🏄‍♂️" },
  //     ]);
  //   }
  // };

// MOCK RESPONSE FOR TESTING
const sendMessage = async (messageOverride, isInitial = false) => {
  const message = typeof messageOverride === 'string' ? messageOverride : input
  if (!message.trim()) return

  if (!isInitial) {
    setMessages(prev => [...prev, { sender: 'user', text: message }])
  }

  if (!messageOverride) setInput('')

  if (isInitial) return

  const mockReply = `Tomorrow I recommend surfing at Trestles around 6 AM. Conditions look great for an intermediate surfer like you.`

  setTimeout(() => {
    setMessages(prev => [...prev, { sender: 'otto', text: mockReply }])
  }, 500)
}


const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    sendMessage()
  }
}

useEffect(() => {
  if (initialMessage) {
    setMessages([
      { sender: 'user', text: initialMessage },
      {
        sender: 'otto',
        text:
          'Tomorrow I recommend surfing at Trestles around 6 AM. Conditions look great for an intermediate surfer like you.',
      },
    ])
    setInput('')
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

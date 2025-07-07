import './ChatBox.css'
import { useState } from "react";

export default function ChatBox({initialMessage}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(initialMessage || "");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const token = localStorage.getItem("jwt");
    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    try {
      const response = await fetch("http://localhost:3001/api/gpt/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "otto", text: data.reply }]);
      // You can also use data.forecast here if you want to show SurfCards
    } catch (error) {
      console.error("Error chatting with Otto:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "otto", text: "Oops! Otto wiped out 🏄‍♂️" },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox__messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chatbox__message chatbox__message--${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbox__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Otto about the surf..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

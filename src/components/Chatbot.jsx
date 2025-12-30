import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { config } from '../config'
import './Chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversationId, setConversationId] = useState('1')
  const messagesEndRef = useRef(null)

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setIsLoading(true)

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    try {
      // Encode the input for URL
      const encodedInput = encodeURIComponent(userMessage)
      const apiUrl = `${config.chatApiBaseUrl}/${conversationId}/${encodedInput}`
      
      const response = await fetch(apiUrl)
      const data = await response.json()

      // Update conversationId if we got a new one
      if (data.conversationId && data.conversationId !== conversationId) {
        setConversationId(data.conversationId)
      }

      // Add bot response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h3>Chat with Me</h3>
        <p className="chatbot-subtitle">Ask me anything about my experience and skills!</p>
      </div>
      <div className="chatbot-messages">
        {messages.length === 0 && (
          <div className="welcome-message">
            <p>Hello! I'm here to help you learn more about Nate Sherman's experience and skills. Feel free to ask me anything!</p>
          </div>
        )}
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">
              {message.role === 'assistant' ? (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="message-content">
              <span className="typing-indicator">...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-input-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chatbot-input"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="chatbot-send-button"
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Chatbot


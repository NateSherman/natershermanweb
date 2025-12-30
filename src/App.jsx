import Resume from './components/Resume'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Nate Sherman</h1>
        <p className="subtitle">Senior Software Engineer / Team Lead</p>
      </header>
      <div className="app-content">
        <div className="resume-section">
          <Resume />
        </div>
        <div className="chatbot-section">
          <Chatbot />
        </div>
      </div>
    </div>
  )
}

export default App


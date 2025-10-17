import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import ChatPage from './pages/ChatPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

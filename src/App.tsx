import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* indica que enruta todo luego de home */}
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

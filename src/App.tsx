import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import HomePage from './pages/HomePage'
import { useUserStore } from './store/UserStore'
import IntroductionPage from './pages/IntroductionPage'
function App() {
  const { configured } = useUserStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          configured ? <Navigate to="/home" replace /> : <WelcomePage />
        } />
        {/* indica que enruta todo luego de home */}
        <Route path="/intro" element={<IntroductionPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

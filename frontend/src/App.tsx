import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboarPage/DashboardPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {

  return (
    <div className='app'>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/signup" element={<SignupPage></SignupPage>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App

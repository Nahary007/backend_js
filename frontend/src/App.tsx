import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboarPage/DashboardPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import { DataProvider } from "../provider/DataProvider"

function App() {
  return (
    <DataProvider >
      <div className='app'>    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import StudentList from './pages/StudentList'
import AddStudent from './pages/AddStudent'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('login')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} />
      case 'dashboard':
        return <Dashboard />
      case 'students':
        return <StudentList />
      case 'add-student':
        return <AddStudent />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      {isLoggedIn && (
        <>
          <Navbar onLogout={handleLogout} />
          <div className="main-container">
            <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <div className="content">
              {renderPage()}
            </div>
          </div>
        </>
      )}
      {!isLoggedIn && <Login onLogin={handleLogin} />}
    </div>
  )
}

export default App
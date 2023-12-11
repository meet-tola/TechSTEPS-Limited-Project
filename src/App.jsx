import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import NewFund from "./pages/NewFund"
import Signup from "./pages/Signup"
import { useEffect, useState } from "react"

const App = () => {
  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        {token ?
        <Route path="/dashboard" element={<Dashboard token={token} />} /> 
        : ""
        }
        {token ?
        <Route path="/dashboard2" element={<NewFund token={token} />} /> 
        : ""
        }
      </Routes>
    </Router>
      </div>
    </div>
    
      
  )
}
export default App
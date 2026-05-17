// Import routing tools
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import components/pages
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <BrowserRouter>

      {/* Navbar appears on all pages */}
      <Navbar />

      {/* App routes */}
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
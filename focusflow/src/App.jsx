// Import routing tools from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Login from "./components/Login"

function App() {
  return (

    // BrowserRouter enables routing
    <BrowserRouter>

      {/* Routes container */}
      <Routes>

        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
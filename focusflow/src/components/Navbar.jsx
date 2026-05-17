// Import Link for navigation without page reload
import { Link } from "react-router-dom"

// Navbar component
const Navbar = () => {
  return (

    // Navbar container
    <nav className="bg-slate-900 text-white p-4">

      {/* Flex container */}
      <div className="flex items-center justify-between">

        {/* App logo/title */}
        <h1 className="text-2xl font-bold">
          FocusFlow
        </h1>

        {/* Navigation links */}
        <div className="flex gap-4">

          {/* Home link */}
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          {/* Login link */}
          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>

          {/* Signup link */}
          <Link to="/signup" className="hover:text-blue-400 transition">
            Sign Up
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
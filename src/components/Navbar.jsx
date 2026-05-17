// Import navigation link (for page routing without refresh)
import { Link, useNavigate } from "react-router-dom"

// Import Supabase client for authentication
import { supabase } from "../supabaseClient"

// Navbar component (visible on all pages)
const Navbar = () => {

  // Hook used to redirect user after logout
  const navigate = useNavigate()

  // Function to log user out
  const handleLogout = async () => {

    // Sign out from Supabase session
    await supabase.auth.signOut()

    // Redirect user to login page
    navigate("/login")
  }

  return (

    // Main navbar container
    <nav className="bg-slate-900 text-white p-4">

      {/* Flex container for layout */}
      <div className="flex items-center justify-between">

        {/* App title / logo */}
        <h1 className="text-2xl font-bold">
          FocusFlow
        </h1>

        {/* Navigation links */}
        <div className="flex gap-4 items-center">

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

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
/// Import React hooks for state and lifecycle
import { useEffect, useState } from "react"

// Import Supabase client
import { supabase } from "../supabaseClient"

// Import navigation tool from React Router
import { useNavigate } from "react-router-dom"

// Dashboard page component
const Dashboard = () => {

  // Used to redirect user if not logged in
  const navigate = useNavigate()

  // Loading state while checking authentication
  const [loading, setLoading] = useState(true)

  // Runs once when page loads
  useEffect(() => {

    // Function to check if user is logged in
    const checkUser = async () => {

      // Ask Supabase for current logged-in user
      const { data } = await supabase.auth.getUser()

      // If no user exists, redirect to login page
      if (!data?.user) {
        navigate("/login")
      }

      // Stop loading after check is done
      setLoading(false)
    }

    checkUser()

  }, [])

  // Show loading screen while checking auth
  if (loading) {
    return (
      <div className="p-6 text-slate-600">
        Loading...
      </div>
    )
  }

  return (

    // Main dashboard container
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Main heading */}
      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        Welcome to FocusFlow
      </h1>

      {/* Description text */}
      <p className="text-slate-600 text-lg">
        Start tracking your focus sessions and boost productivity.
      </p>

      {/* Placeholder card for future features */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">

        <h2 className="text-2xl font-semibold mb-2">
          Focus Session Tracker
        </h2>

        <p className="text-slate-600">
          Your timer and session tracking tools will go here.
        </p>

      </div>

    </div>
  )
}

export default Dashboard
// Import React hook
import { useState } from "react"

// Import Supabase client
import { supabase } from "../supabaseClient"

// Signup page component
const Signup = () => {

  // Store email input
  const [email, setEmail] = useState("")

  // Store password input
  const [password, setPassword] = useState("")

  // Handle user signup
  const handleSignup = async (event) => {

    // Prevent page refresh
    event.preventDefault()

    // Create user with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    // Handle errors
    if (error) {
      alert(error.message)
      return
    }

    // Success message
    console.log(data)

    alert("Account created successfully!")
  }

  return (

    // Full screen container
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      {/* Signup card */}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Sign Up for FocusFlow
        </h1>

        {/* Signup form */}
        <form
          className="space-y-4"
          onSubmit={handleSignup}
        >

          {/* Email input */}
          <div>

            <label className="block mb-1 text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Password input */}
          <div>

            <label className="block mb-1 text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Signup button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>

        </form>

      </div>

    </div>
  )
}

export default Signup
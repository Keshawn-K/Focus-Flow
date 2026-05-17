// Import React hook for managing state
import { useState } from "react"
import { supabase } from "../supabaseClient"

// Login page component
const Login = () => {

  // Store email input value
  const [email, setEmail] = useState("")

  // Store password input value
  const [password, setPassword] = useState("")

  // Handle form submission
const handleLogin = async (event) => {

  // Prevent page refresh
  event.preventDefault()

  // Attempt login with Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // Handle errors
  if (error) {
    alert(error.message)
    return
  }

  // Successful login
  console.log("Logged in user:", data)

  alert("Login successful!")
}

  return (

    // Full screen container
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      {/* Login card */}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Login to FocusFlow
        </h1>

        {/* Login form */}
        <form
          className="space-y-4"
          onSubmit={handleLogin}
        >

          {/* Email field */}
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

          {/* Password field */}
          <div>

            <label className="block mb-1 text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login
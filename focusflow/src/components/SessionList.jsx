// Import React hooks
import { useEffect, useState } from "react"

// Import Supabase client
import { supabase } from "../supabaseClient"

// Session list component
const SessionList = () => {

  // Store session data
  const [sessions, setSessions] = useState([])

  // Fetch sessions when component loads
  useEffect(() => {

    const fetchSessions = async () => {

      // Get data from Supabase table
      const { data, error } = await supabase
        .from("focus_sessions")
        .select("*")
        .order("created_at", { ascending: false })

      // Handle successful fetch
      if (!error) {
        setSessions(data)
      }
    }

    fetchSessions()

  }, [])

  return (

    // Main container
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">
        Session History
      </h2>

      {/* Empty state */}
      {sessions.length === 0 ? (
        <p className="text-slate-500">
          No sessions saved yet.
        </p>
      ) : (

        // Session list
        <div className="space-y-3">

          {sessions.map((session) => (

            <div
              key={session.id}
              className="border border-slate-200 rounded-lg p-3 flex justify-between"
            >

              {/* Duration */}
              <p>
                Focus Time: {session.duration} seconds
              </p>

              {/* Date */}
              <p className="text-slate-500 text-sm">
                {new Date(session.created_at).toLocaleString()}
              </p>

            </div>

          ))}

        </div>
      )}

    </div>
  )
}

export default SessionList
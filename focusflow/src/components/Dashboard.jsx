// Dashboard page component
const Dashboard = () => {
  return (

    // Full page container
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Dashboard content */}
      <div className="max-w-4xl mx-auto">

        {/* Page heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Welcome to FocusFlow
        </h1>

        {/* Small description */}
        <p className="text-slate-600 text-lg">
          Start tracking your focus sessions and boost productivity.
        </p>

        {/* Placeholder card */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-2">
            Focus Session Tracker
          </h2>

          <p className="text-slate-600">
            Your focus tools and statistics will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Dashboard
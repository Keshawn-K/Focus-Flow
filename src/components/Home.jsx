const Home = () => {
  return (

    // Main page container
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      {/* Centered content */}
      <div className="text-center">

        {/* Main heading */}
        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          Welcome to FocusFlow
        </h1>

        {/* Small description */}
        <p className="text-lg text-slate-600">
          Track your focus sessions and stay productive.
        </p>

      </div>
    </div>
  )
}

export default Home
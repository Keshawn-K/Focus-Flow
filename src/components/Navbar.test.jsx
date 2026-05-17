// Import Vitest tools
import { test, expect } from "vitest"

// Import testing tools
import { render, screen } from "@testing-library/react"

// Import router wrapper
import { BrowserRouter } from "react-router-dom"

// Import Navbar component
import Navbar from "./Navbar"

// Test navbar rendering
test("renders navbar links", () => {

  // Render Navbar inside router
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  // Check Home link exists
  expect(screen.getByText(/home/i)).toBeInTheDocument()

  // Check Login link exists
  expect(screen.getByText(/login/i)).toBeInTheDocument()

  // Check Sign Up link exists
  expect(screen.getByText(/sign up/i)).toBeInTheDocument()
})
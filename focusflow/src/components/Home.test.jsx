// Import test functions from Vitest
import { test, expect } from "vitest"

// Import testing utilities
import { render, screen } from "@testing-library/react"

// Import component
import Home from "./Home"

// Test case
test("renders welcome heading", () => {

  // Render component
  render(<Home />)

  // Find heading text
  const heading = screen.getByText(/welcome to focusflow/i)

  // Check if heading exists
  expect(heading).toBeInTheDocument()
})
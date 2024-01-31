import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import App from './App'

describe("App test", () => {
  test("Component renders", () => {
    render(<App />)
    expect(screen.getByText(/Car Shop/i)).toBeDefined()
  })
})
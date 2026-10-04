// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

afterEach(() => {
  cleanup()
})

describe('App', () => {
  it('renders the React Actions heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'React Actions' })).toBeTruthy()
  })
})

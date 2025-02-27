import { render, screen, logRoles, fireEvent } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { AboutPage } from '../pages'

describe('About Page', () => {
	test('check if h1 is visible', () => {
		render(<AboutPage />)
		expect(screen.getByText(/a new era of/i)).toBeInTheDocument()
	})
})

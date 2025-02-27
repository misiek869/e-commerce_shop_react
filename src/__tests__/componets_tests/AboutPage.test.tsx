import { render, screen } from '@testing-library/react'

import { test, expect } from 'vitest'
import { AboutPage } from '../../pages'

describe('About Page', () => {
	test('check if h1 is visible', () => {
		render(<AboutPage />)
		expect(screen.getByText(/a new era of/i)).toBeInTheDocument()
	})
})

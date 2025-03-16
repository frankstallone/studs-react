import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom/vitest'
import { Button } from './index.js'
import styles from './Button.module.css'

expect.extend(toHaveNoViolations)

const sizeToClassName: Record<
  'default' | 'sm' | 'lg' | 'icon',
  keyof typeof styles
> = {
  default: 'sizeDefault',
  sm: 'sizeSm',
  lg: 'sizeLg',
  icon: 'sizeIcon'
}

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      styles.button,
      styles.default,
      styles.sizeDefault
    )
  })

  it('applies different variants correctly', () => {
    const variants = [
      'default',
      'destructive',
      'outline',
      'secondary',
      'ghost',
      'link'
    ] as const
    variants.forEach((variant) => {
      cleanup()
      render(<Button variant={variant}>Button</Button>)
      const button = screen.getByRole('button', { name: /button/i })
      expect(button).toHaveClass(styles[variant])
    })
  })

  it('applies different sizes correctly', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const
    sizes.forEach((size) => {
      cleanup()
      render(<Button size={size}>Button</Button>)
      const button = screen.getByRole('button', { name: /button/i })
      expect(button).toHaveClass(styles[sizeToClassName[size]])
    })
  })

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/">Link Button</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass(styles.button)
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('is keyboard accessible', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    await user.tab()
    expect(button).toHaveFocus()

    await user.keyboard('[Space]')
    expect(handleClick).toHaveBeenCalledTimes(1)

    await user.keyboard('[Enter]')
    expect(handleClick).toHaveBeenCalledTimes(2)
  })

  it('applies custom className correctly', () => {
    render(<Button className="custom-class">Button</Button>)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveClass('custom-class')
  })

  it('passes through additional HTML attributes', () => {
    render(
      <Button data-testid="test-button" aria-label="Test Button">
        Button
      </Button>
    )
    const button = screen.getByTestId('test-button')
    expect(button).toHaveAttribute('aria-label', 'Test Button')
  })
})

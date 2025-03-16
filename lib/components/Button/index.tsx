import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import styles from './Button.module.css'

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const sizeToClassName: Record<ButtonSize, keyof typeof styles> = {
  default: 'sizeDefault',
  sm: 'sizeSm',
  lg: 'sizeLg',
  icon: 'sizeIcon'
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    const classes = [
      styles.button,
      styles[variant],
      styles[sizeToClassName[size]],
      className
    ]
      .filter(Boolean)
      .join(' ')

    return <Comp className={classes} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button }

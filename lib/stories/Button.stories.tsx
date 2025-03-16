import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button/index.js'
import '../components/Button/Button.module.css'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link'
      ]
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon']
    },
    disabled: {
      control: 'boolean'
    },
    asChild: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive'
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link'
  }
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}

export const Icon: Story = {
  args: {
    children: '🔍',
    size: 'icon'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}

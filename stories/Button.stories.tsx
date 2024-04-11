import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>

const getCaptionForLocale = (locale: string) => {
  switch (locale) {
    case 'ko':
      return '안녕!'
    case 'en':
      return 'Hello!'
    case 'ja':
      return '곤니치와!'
    default:
      return '안녕!'
  }
}

export const StoryWithLocale = {
  render: (args: any, { globals: { locale } }: { globals: { locale: string } }) => {
    const caption = getCaptionForLocale(locale)
    return <Button label={caption} primary={true} />
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

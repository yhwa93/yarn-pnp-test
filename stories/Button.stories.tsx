import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { useTranslations } from 'next-intl'

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

export default meta
type Story = StoryObj<typeof meta>

export const StoryWithLocale = {
  render: () => {
    const t = useTranslations('About')

    return <Button label={t('title')} primary={true} />
  },
}

// export const Primary: Story = {
//   decorators: [
//     (Story) => (
//       <div className="i_am_decorator">
//         <Story />
//       </div>
//     ),
//   ],
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// }
//
// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// }
//
// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }
//
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }

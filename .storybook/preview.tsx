import type { Preview } from '@storybook/react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { useGlobals } from '@storybook/manager-api'

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'ko',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ko', right: '🇰🇷', title: '한국어' },
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'ja', right: '🇯🇵', title: '中文' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      return <Story />
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

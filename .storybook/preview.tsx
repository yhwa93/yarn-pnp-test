import type { Preview } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import * as koMsg from '../messages/ko.json'
import * as enMsg from '../messages/en.json'
import * as jaMsg from '../messages/ja.json'

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
          { value: 'ja', right: '🇯🇵', title: '日本語' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedLocale = context.globals.locale

      const convertLocaleMsg = () => {
        switch (selectedLocale) {
          case 'ko':
            return koMsg
          case 'en':
            return enMsg
          case 'ja':
            return jaMsg
        }
      }

      return (
        <NextIntlClientProvider locale={selectedLocale} messages={convertLocaleMsg()}>
          <Story />
        </NextIntlClientProvider>
      )
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

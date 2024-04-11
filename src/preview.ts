import type { Renderer, ProjectAnnotations } from '@storybook/types'
import i18n from 'storybook-i18n/preview'
import { withYourI18nDecorator } from './withYourDecorator'

// @ts-ignore
const i18nDecorators: DecoratorFunction<Renderer, { [p: string]: any }> | DecoratorFunction<Renderer, { [p: string]: any }>[] = i18n?.decorators || []

const preview: ProjectAnnotations<Renderer> = {
  ...i18n,
  decorators: [...i18nDecorators, withYourI18nDecorator],
}

export default preview

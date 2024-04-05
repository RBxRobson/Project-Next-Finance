import type { Preview } from '@storybook/react'

import { decorators } from './decorators'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators
}

export default preview

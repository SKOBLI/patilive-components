import type { Preview } from '@storybook/react'
import { TamaguiProvider, ToastProvider, ToastViewport, config } from 'patilive-component-library'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f9fafb' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme="light">
        <ToastProvider>
          <Story />
          <ToastViewport />
        </ToastProvider>
      </TamaguiProvider>
    ),
  ],
}

export default preview

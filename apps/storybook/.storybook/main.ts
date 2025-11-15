import type { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (baseConfig) => {
    baseConfig.resolve = {
      ...(baseConfig.resolve ?? {}),
      alias: {
        ...(baseConfig.resolve?.alias ?? {}),
        app: path.resolve(__dirname, '../../packages/app'),
        'patilive-component-library': path.resolve(__dirname, '../../packages/ui'),
      },
    }

    baseConfig.plugins = [
      ...(baseConfig.plugins ?? []),
      tamaguiPlugin({
        config: path.resolve(__dirname, '../../packages/config/src/tamagui.config.ts'),
        components: ['tamagui', 'patilive-component-library'],
        disableExtraction: true,
      }),
    ]

    baseConfig.optimizeDeps = {
      ...(baseConfig.optimizeDeps ?? {}),
      include: [
        ...(baseConfig.optimizeDeps?.include ?? []),
        'react',
        'react-dom',
        'tamagui',
        'patilive-component-library',
      ],
    }

    return baseConfig
  },
}

export default config

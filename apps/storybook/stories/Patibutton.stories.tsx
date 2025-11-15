import type { Meta, StoryObj } from '@storybook/react'
import { Patibutton, YStack } from 'patilive-component-library'

const meta = {
  title: 'Components/Patibutton',
  component: Patibutton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'textbase'],
      description: 'Gorsel stil (dolu, cizgili veya sadece metin).',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    tone: {
      control: 'select',
      options: ['red', 'black', 'white', 'green'],
      description: 'Ana renk tonu.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Tam genislikte buton.',
    },
    disabled: {
      control: 'boolean',
      description: 'Tum etkilesimleri kapatir.',
    },
    children: {
      control: 'text',
      description: 'Buton metni.',
    },
  },
  args: {
    children: 'Patibutton',
    variant: 'filled',
    size: 'medium',
    fullWidth: false,
    disabled: false,
    tone: 'black',
  },
} satisfies Meta<typeof Patibutton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
}

export const TextBase: Story = {
  args: { variant: 'textbase', children: 'Text base' },
}

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full width' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

export const Tones: Story = {
  render: (args) => (
    <YStack gap="$3">
      <Patibutton {...args} tone="black">
        Black tone
      </Patibutton>
      <Patibutton {...args} tone="red">
        Red tone
      </Patibutton>
      <Patibutton {...args} tone="white">
        White tone
      </Patibutton>
      <Patibutton {...args} tone="green">
        Green tone
      </Patibutton>
    </YStack>
  ),
  parameters: {
    controls: { exclude: ['tone', 'children'] },
  },
}

export const Sizes: Story = {
  render: (args) => (
    <YStack gap="$3" width={240}>
      <Patibutton {...args} size="small">
        Small
      </Patibutton>
      <Patibutton {...args} size="medium">
        Medium
      </Patibutton>
      <Patibutton {...args} size="large">
        Large
      </Patibutton>
    </YStack>
  ),
  parameters: {
    controls: {
      exclude: ['size', 'children'],
    },
  },
}

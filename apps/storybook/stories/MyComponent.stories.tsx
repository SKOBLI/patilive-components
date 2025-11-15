import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from 'patilive-component-library'

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    blue: {
      control: 'boolean',
      description: 'Toggles the blue variant',
    },
  },
  args: {
    children: 'Patilive component',
    blue: false,
    padding: '$4',
  },
} satisfies Meta<typeof MyComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Blue: Story = {
  args: {
    blue: true,
  },
}

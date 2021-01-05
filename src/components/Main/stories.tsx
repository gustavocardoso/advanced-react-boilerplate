import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Advanced React',
    description: 'The best React course in the world'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

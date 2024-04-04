import { StoryObj } from '@storybook/react';
import Introduction from '@/pages/Introduction/Introduction';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Introduction> = {
  component: Introduction,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Introduction>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

// export const Secondary: Story = {
//   args: {
//     ...Primary.args,
//     primary: false,
//   },
// };

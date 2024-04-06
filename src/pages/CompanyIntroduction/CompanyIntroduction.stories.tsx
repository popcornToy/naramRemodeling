import { StoryObj } from '@storybook/react';
import CompanyIntroduction from '@/pages/Introduction/CompanyIntroduction';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof CompanyIntroduction> = {
  component: CompanyIntroduction,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof CompanyIntroduction>;

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

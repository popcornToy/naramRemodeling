import { StoryObj } from '@storybook/react';
import introductionContent from '@/pages/Introduction/components/IntroductionContent';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof introductionContent> = {
  component: introductionContent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof introductionContent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

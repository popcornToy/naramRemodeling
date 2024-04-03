import { Meta, StoryObj } from '@storybook/react';
import NaviButton from './NaviButton';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'GlobalNaviBar/atoms',
  component: NaviButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    route: { control: 'text' },
  },
  decorators: [
    (Story) => {
      <MemoryRouter>
        <Story />
      </MemoryRouter>;
    },
  ],
} satisfies Meta<typeof NaviButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Intro: Story = {
  args: {
    text: '회사소개',
    route: '/',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import NaviBar from './NaviBar';

const meta = {
  title: 'GlobalNaviBar/molecules',
  component: NaviBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLogin: { control: 'boolean' },
    isMain: { control: 'boolean' },
    isScrolled: { control: 'boolean' },
  },
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NaviBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsLogout: Story = {
  args: {
    isMain: false,
    isLogin: false,
    isScrolled: false,
  },
};

export const IsLogin: Story = {
  args: {
    isMain: false,
    isLogin: true,
    isScrolled: false,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Header/organisms',
  component: Header,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    isLogin: { control: 'boolean' },
    isMain: { control: 'boolean' },
  },
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsLogin: Story = {
  args: {
    isLogin: true,
    isMain: false,
  },
};

export const IsLogout: Story = {
  args: {
    isLogin: false,
    isMain: false,
  },
};

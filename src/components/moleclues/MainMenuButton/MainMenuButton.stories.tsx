import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MainMenuButton from './MainMenuButton';

const meta = {
  title: 'MainMenuButton/molecules',
  component: MainMenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isHeader: { control: 'boolean' },
  },
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MainMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    isHeader: true,
  },
};

export const NotHeader: Story = {
  args: {
    isHeader: false,
  },
};

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
    isHeader: { control: 'boolean' },
    color: { control: 'radio', options: ['black', 'gray', 'white'] },
    justifyContent: { control: 'radio', options: ['center', 'end'] },
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
} satisfies Meta<typeof NaviBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    isHeader: true,
    color: 'black',
    justifyContent: 'center',
    isMain: true,
  },
};

export const NotHeader: Story = {
  args: {
    isHeader: false,
    justifyContent: 'center',
  },
};

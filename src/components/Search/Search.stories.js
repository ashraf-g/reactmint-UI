import React from 'react';
import Search from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary']
    }
  }
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Search'
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Search',
  variant: 'primary'
};
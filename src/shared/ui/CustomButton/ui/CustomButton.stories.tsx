import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomButton } from './CustomButton';

export default {
  title: 'shared/CustomButton',
  component: CustomButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Custom button'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Custom button',
  theme: 'clear'
};
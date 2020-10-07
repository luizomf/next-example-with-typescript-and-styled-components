import { TestComponent, TestComponentProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'TestComponent',
  component: TestComponent,
  args: {
    children: 'Default Value',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Template: Story<TestComponentProps> = (args) => (
  <TestComponent {...args} />
);

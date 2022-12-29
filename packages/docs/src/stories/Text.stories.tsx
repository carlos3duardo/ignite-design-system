import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eligendi
        assumenda voluptates fugit beatae molestiae in deleniti nihil voluptate
        odit hic iure non ut, accusamus error provident impedit quos saepe.
      </>
    ),
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

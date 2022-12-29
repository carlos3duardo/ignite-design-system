import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eligendi
        assumenda voluptates fugit beatae molestiae in deleniti nihil voluptate
        odit hic iure non ut, accusamus error provident impedit quos saepe.
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

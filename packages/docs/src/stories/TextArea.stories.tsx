import { StoryObj, Meta } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react';

export default {
  title: 'Form/Textarea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Post your comment:</Text> {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Lorem ipsum dolor sit amet...',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};

import * as Avatar from '@radix-ui/react-avatar';
import { styled } from '../../styles';

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
});

export const AvatarImage = styled(Avatar.AvatarImage, {
  width: 'inherit',
  height: 'inherit',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallBack = styled(Avatar.Fallback, {
  width: 'inherit',
  height: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray600',

  svg: {
    width: '$6',
    height: '$6',
  },
});

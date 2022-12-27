import { styled } from '../src/styles';

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray200',
  borderRadius: '$md',
});

export function app() {
  return <Button>Hello World!</Button>;
}

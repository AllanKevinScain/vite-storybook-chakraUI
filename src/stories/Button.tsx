import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return <ChakraButton>{props.label}</ChakraButton>;
};

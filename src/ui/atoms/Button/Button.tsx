import { Button as ButtonUI } from '@mui/material';

interface IButton {
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary';
  disabled?: boolean;
  size: 'small' | 'medium' | 'large';
}

export default function Button({ children, variant, color, size }: IButton) {
  return (
    <ButtonUI variant={variant} color={color} size={size}>
      {children}
    </ButtonUI>
  );
}

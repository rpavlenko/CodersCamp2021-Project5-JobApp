import { Button } from '@mui/material';

export interface IButton {
  children: React.ReactNode;
  variant: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  sx?: Record<string, unknown>;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const BaseButton = ({
                             children,
                             variant,
                             color,
                             size,
                             startIcon,
                             sx,
                             fullWidth,
                             onClick,
                           }: IButton) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      sx={sx}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

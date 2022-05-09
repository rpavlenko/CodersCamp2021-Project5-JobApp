import { BaseButton } from './BaseButton';
import { IButton } from './BaseButton';

export const LanguageButton = ({
  children,
  variant,
  size,
  color,
  sx,
}: IButton) => {
  return (
    <BaseButton
      variant={variant}
      size={size}
      color={color}
      sx={{
        textTransform: 'none',
        marginRight: '5px',
        '@media (max-width: 500px)': {
          border: 'none',
          padding: '0',
        },
      }}
    >
      {children}
    </BaseButton>
  );
};

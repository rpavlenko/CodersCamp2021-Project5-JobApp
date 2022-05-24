import { BaseButton } from './BaseButton';

interface IProps {
  onClick: () => void;
  sx?: Record<string, unknown>;
}

export const ApplyButton = ({ onClick, sx }: IProps) => {
  return (
    <BaseButton
      variant={'contained'}
      size={'large'}
      onClick={onClick}
      sx={{
        sx,
        backgroundColor: '#1271ed',
        textTransform: 'none',
        borderRadius: 0,
        color: 'white',
        padding: '10px',
        px: '20px',
        '&:hover': {
          backgroundColor: '#2983f9',
        },
      }}
    >
      Aplikuj
    </BaseButton>
  );
};

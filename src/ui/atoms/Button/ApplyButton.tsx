import { BaseButton } from './BaseButton';

interface IProps {
  onClick: () => void
}

export const ApplyButton = ({ onClick }: IProps) => {
  return (
    <BaseButton variant={'contained'}
                size={'large'}
                onClick={onClick}
                sx={{
                  backgroundColor: '#1271ed',
                  textTransform: 'none',
                  borderRadius: 0,
                  color: 'white',
                  my: '20px',
                  padding: '10px',
                  px: '20px',
                }}>
      Aplikuj
    </BaseButton>
  );
};
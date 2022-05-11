import { BaseButton } from './BaseButton';

export const ApplyButton = () => {
  return (
    <BaseButton variant={'contained'} size={'large'} sx={{
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
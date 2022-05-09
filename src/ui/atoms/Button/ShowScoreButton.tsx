import { BaseButton } from './BaseButton';

export const ShowScoreButton = () => {
  return (
    <BaseButton variant={'contained'} size={'large'} fullWidth
                sx={{ backgroundColor: '#1271ed', textTransform: 'none', color: 'white',  marginBottom: '10px' }}>
      Pokaż wyniki (120)
    </BaseButton>
  );
};
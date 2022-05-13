import { BaseButton } from './BaseButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const FavouriteButton = () => {
  return (
    <BaseButton variant={'outlined'}
                size={'large'}
                startIcon={<FavoriteBorderIcon />}
                fullWidth={true}
      // onClick={handleClick}
                sx={{
                  backgroundColor: 'black',
                  color: '#ddd',
                  borderColor: '#ddd',
                  textTransform: 'none',
                  marginTop: '15px',
                  marginBottom: '20px',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: '#ddd',
                    borderColor: '#ddd',
                  }
                }}>
      Twoje ulubione oferty
    </BaseButton>
  );
};

import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { BaseButton } from './BaseButton';


export const FilterButton = () => {

  return (
    <BaseButton
      variant={'outlined'}
      size={'large'}
      startIcon={<FilterListOutlinedIcon />}
      fullWidth={true}
      sx={{
        backgroundColor: 'black',
        color: '#ddd',
        borderColor: '#ddd',
        textTransform: 'none',
        marginTop: '15px',
        '&:hover': {
          backgroundColor: 'black',
          color: '#ddd',
          borderColor: '#ddd',
        },
      }}>
      Filtry
    </BaseButton>
  );
};


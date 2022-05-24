import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { BaseButton } from './BaseButton';

interface IProps {
  onClick: () => void;
}

export const FilterButton = (props: IProps) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <BaseButton
      variant={'outlined'}
      size={'large'}
      startIcon={<FilterListOutlinedIcon />}
      fullWidth={true}
      onClick={handleClick}
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
        '@media (min-width: 768px)': {
          width: '48%',
        },
      }}
    >
      Filtry
    </BaseButton>
  );
};

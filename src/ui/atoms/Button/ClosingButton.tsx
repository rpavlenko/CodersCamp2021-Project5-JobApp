import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const ClosingButton = () => {
  return (
    <IconButton aria-label='close' sx={{paddingLeft: '20px'}}>
      <CloseIcon />
    </IconButton>
  );
};
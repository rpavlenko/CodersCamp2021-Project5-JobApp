import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  onClose: () => void
}

export const ClosingButton = (props: IProps) => {
  const { onClose } = props;
  return (
    <IconButton onClick={onClose} aria-label='close' sx={{padding: '20px'}}>
      <CloseIcon />
    </IconButton>
  );
};
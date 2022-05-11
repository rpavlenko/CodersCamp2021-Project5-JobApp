import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  onClose: () => void
}

export const ClosingButton = (props: IProps) => {
  const { onClose } = props;
  return (
    <IconButton aria-label='close' sx={{paddingLeft: '20px'}}>
      <CloseIcon onClick={onClose} />
    </IconButton>
  );
};
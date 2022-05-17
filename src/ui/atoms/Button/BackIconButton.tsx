import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

interface IProps {
  onClick: () => void
}

export const BackIconButton = ({onClick } : IProps) => {
  return (
    <IconButton aria-label="back"
                sx={{padding: 0, marginTop: '15px', marginBottom: '10px'}}>
      <ArrowCircleLeftOutlinedIcon onClick={onClick} fontSize={'large'} />
    </IconButton>
  )
}
import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export const BackIconButton = () => {
  return (
    <IconButton aria-label="back" sx={{padding: 0, marginTop: '15px', marginBottom: '10px'}}>
      <ArrowCircleLeftOutlinedIcon fontSize={'large'} />
    </IconButton>
  )
}
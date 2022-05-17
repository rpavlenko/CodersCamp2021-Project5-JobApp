import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useNavigate } from 'react-router-dom';

export const BackIconButton = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <IconButton aria-label='back'
                sx={{ padding: 0, marginTop: '15px', marginBottom: '10px' }}>
      <ArrowCircleLeftOutlinedIcon onClick={handleBackClick} fontSize={'large'} />
    </IconButton>
  )
}
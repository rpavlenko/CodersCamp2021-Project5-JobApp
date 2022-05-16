import Button from '@mui/material/Button';
import { useState } from 'react';
import { Typography } from '@mui/material';

interface IProps {
  sx?: Record<string, unknown>;
  text: string;
}

export const ReadMore = ({ sx, text }: IProps) => {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => setReadMore((prevValue => !prevValue));
  return (
    <>
      <Typography sx={sx}>
        {readMore ? text : `${text.substring(0, 200)}...`}
      </Typography>
      <Button color={'primary'} onClick={handleClick}
              sx={{ textTransform: 'none', marginBottom: '10px' }}>
        {readMore ? 'zwiń' : 'rozwiń'}
      </Button>
    </>
  );
};
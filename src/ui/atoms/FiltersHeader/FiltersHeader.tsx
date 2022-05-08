import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

interface IProps {
  category: string
}

export const FiltersHeader = (props: IProps) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);

  const handleClick = () => {
    setShowCategory((prevValue) => !prevValue);
  };
  return (
    <Card
      variant='outlined'
      onClick={handleClick}
      square
      sx={{ width: 1, border: '#ddd', backgroundColor: showCategory ? '#eee' : '#fff', paddingLeft: '10px' }}>
      <CardActions>
        {showCategory
          ? <RemoveCircleOutlinedIcon sx={{ fontSize: '30px' }} />
          : <AddCircleTwoToneIcon sx={{ fontSize: '30px' }} />}
        <Typography marginLeft={1} fontSize={'medium'}>
          {props.category}
        </Typography>
      </CardActions>
    </Card>
  );
};

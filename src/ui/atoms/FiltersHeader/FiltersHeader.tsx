import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';

interface IProps {
  category: string
  numberCategories: number
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
      sx={{
        width: 1,
        border: '#ddd',
        paddingLeft: '10px',
      }}>
      <CardActions>
        {showCategory
          ? <RemoveCircleOutlinedIcon sx={{ fontSize: '30px' }} />
          : <AddCircleTwoToneIcon sx={{ fontSize: '30px' }} />}
        <Typography marginLeft={1} fontSize={'medium'}>
          {props.category}
        </Typography>
        {props.numberCategories > 0
          ? <Avatar sx={{
            width: 20,
            height: 20,
            fontSize: '12px',
            backgroundColor: '#1271ed',
            color: 'white',
            marginLeft: '10px',
          }}>
            {props.numberCategories}
          </Avatar>
          : null}
      </CardActions>
    </Card>
  );
};

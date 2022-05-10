import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface IProps {
  task: {
    id: number
    exercise: string
  }
}

export const DailyTask = (props: IProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', marginBottom: '20px' }}>
      <Avatar sx={{
        width: 30,
        height: 30,
        fontSize: '16px',
        marginRight: '10px',
      }}>
        {props.task.id}
      </Avatar>
      <Typography variant={'body1'}>
        {props.task.exercise}
      </Typography>
    </Box>
  );
};
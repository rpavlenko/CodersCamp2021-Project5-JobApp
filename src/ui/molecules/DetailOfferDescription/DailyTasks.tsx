import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import Box from '@mui/material/Box';
import { DailyTask } from '../../atoms/DailyTask/DailyTask';

interface IDailyTasks {
  dailyTasks: {
    id: number;
    exercise: string;
  }[];
}

export const DailyTasks = ({ dailyTasks }: IDailyTasks) => {
  return (
    <Box>
      <SubheaderOfDescription> Codzienne zadania </SubheaderOfDescription>
      {dailyTasks.map((task) => (
        <DailyTask key={task.id} task={task} />
      ))}
    </Box>
  );
};

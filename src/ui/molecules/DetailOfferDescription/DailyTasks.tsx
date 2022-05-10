import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import Box from '@mui/material/Box';
import { DailyTask } from '../../atoms/DailyTask/DailyTask';

const dailyTasks = [
  {
    id: 1,
    exercise: 'Tworzenie aplikacji w nowych i istniejących projektach oprogramowania w C# / Visual Studio',
  },
  {
    id: 2,
    exercise: 'Zapewnienie właściwej jakości wytwarzanego oprogramowania i zgodności ze standardami oraz dobrymi praktykami',
  },
  {
    id: 3,
    exercise: 'Praca z dokumentacją techniczną',
  },
  {
    id: 4,
    exercise: 'Udział w testach',
  },
];

export const DailyTasks = () => {
  return (
    <Box>
      <SubheaderOfDescription> Codzienne zadania </SubheaderOfDescription>
      {dailyTasks.map((task) => (
        <DailyTask task={task} />
      ))}
    </Box>
  );
};

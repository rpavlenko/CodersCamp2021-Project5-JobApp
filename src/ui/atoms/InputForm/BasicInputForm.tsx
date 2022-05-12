import { TextField } from '@mui/material';

interface IProps {
  item: {
    id: number,
    label: string,
    requiredStar: boolean,
  }
}

export const BasicInputForm = (props: IProps) => {
  const { label, requiredStar } = props.item;
  return (
    <TextField label={label}
               variant="outlined"
               color='primary'
               required={requiredStar}
               sx={{
                 radius: 0, marginBottom: '20px', width: '100%',
               }} />
  );
};


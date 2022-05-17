import Typography from '@mui/material/Typography';

interface IProps {
  props: string
}

export const HeaderFormPage = ({props}: IProps) => {
  return (
    <Typography
      variant={'h1'}
      align={'center'}
      sx={{
        fontSize: '30px',
        fontWeight: '700',
        marginTop: '10px',
        marginBottom: '40px',
      }}>
      {props}
    </Typography>
  );
};
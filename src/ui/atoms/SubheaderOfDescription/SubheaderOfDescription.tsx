import Typography from '@mui/material/Typography';

interface IProps {
  children: React.ReactNode;
}

export const SubheaderOfDescription = (props: IProps) => {
  return (
    <>
      <Typography variant='h1' sx={{ fontSize: '18px', fontWeight: '700', marginTop: '20px', marginBottom: '15px' }}>
        {props.children}
      </Typography>
    </>
  );
};

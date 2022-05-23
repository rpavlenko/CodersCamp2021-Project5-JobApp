import Typography from '@mui/material/Typography';

interface IProps {
  children: React.ReactNode;
  align?: 'center' | 'left'
}

export const SubheaderOfDescription = ({ children, align }: IProps) => {
  return (
    <>
      <Typography variant='h1'
                  align={align}
                  sx={{
                    fontSize: '18px',
                    fontWeight: '700',
                    marginTop: '20px',
                    marginBottom: '15px',
                  }}>
        {children}
      </Typography>
    </>
  );
};

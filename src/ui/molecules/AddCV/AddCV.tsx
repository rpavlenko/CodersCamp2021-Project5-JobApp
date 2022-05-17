import { Paper, Typography } from '@mui/material';
import { AddCVButton } from '../../atoms/Button/AddCVButton';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';


export const AddCV = () => {
  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '15px',
      paddingTop: '30px',
      py: '20px',

    }}>
      <Avatar />
      <Typography sx={{ marginLeft: '10px', marginRight: '10px' }}> CV </Typography>
      <AddCVButton />
    </Paper>
  );
};
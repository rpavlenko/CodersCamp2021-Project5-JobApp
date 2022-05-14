import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import { ClosingButton } from './ClosingButton';

const Input = styled('input')({
  display: 'none',
});

export const AddCVButton = () => {
  const [fileName, setFileName] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.files != null && setFileName(event.target.files[0].name);
  };

  const onClose = () => {
    setFileName('');
  };

  return (
    <>
      <Input
        onChange={onChange}
        accept='image/*'
        id='contained-button-file'
        type='file'
        sx={{ display: 'none' }}
      />
      <Typography sx={{ fontSize: '12px' }}> {fileName} </Typography>
      {fileName ? <ClosingButton onClose={onClose} /> :
        <label htmlFor='contained-button-file'>
          <Button variant='outlined' component='span' sx={{
            borderRadius: 0,
            textTransform: 'none',
          }}>
            Wgraj
          </Button>
        </label>
      }
    </>
  );
};

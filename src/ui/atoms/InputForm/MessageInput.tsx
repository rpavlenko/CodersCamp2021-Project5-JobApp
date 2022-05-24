import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useRef } from 'react';

export const MessageInput = () => {
  const textInput = useRef<HTMLInputElement>(null);

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        label='Wiadomość do rekrutera'
        color='primary'
        variant='outlined'
        type='text'
        inputRef={textInput}
        required
        multiline
        minRows={5}
        sx={{
          radius: 0,
          width: '100%',
          marginBottom: '20px',
        }}
      />
      <Button
        onClick={() => {
          if( textInput.current !== null) {
            textInput.current.value = '';
          }
        }}
        size={'small'}
        color='secondary'
        sx={{
          position: 'absolute',
          right: '20px',
          bottom: '25px',
          textTransform: 'none',
        }}
      >
        Wyczyść tekst
      </Button>
    </Box>
  );
};

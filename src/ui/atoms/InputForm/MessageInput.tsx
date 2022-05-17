import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export const MessageInput = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        label="Wiadomość do rekrutera"
        color="primary"
        variant="outlined"
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
        size={'small'}
        color="secondary"
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

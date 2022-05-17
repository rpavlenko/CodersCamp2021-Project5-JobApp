import { InputFormList } from '../../molecules/InputFormList/InputFormList';
import { MessageInput } from '../../atoms/InputForm/MessageInput';
import Box from '@mui/material/Box';

export const FormSection = () => {
  return (
    <Box component="form"
         noValidate
         autoComplete="off">
      <InputFormList />
      <MessageInput />
    </Box>
  );
};
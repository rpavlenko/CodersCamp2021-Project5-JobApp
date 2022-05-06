import { useContext } from 'react';
import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from './themes/ColorModeContext';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './index.css';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { FilterButton } from './ui/atoms/Button/FilterButton';

export default function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div className='App'>
      <Container maxWidth='sm'>
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color='inherit'
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <header className='App-header'>
          <p>Hello Vite + React + MaterialUI!</p>
          <BaseButton
            variant={'outlined'} color={'primary'} size={'large'}
            >
            Filtry
          </BaseButton>
          <FilterButton />
        </header>
      </Container>
    </div>
  );
}

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#ffc107',
            dark: '#fff',
          },
          secondary: amber,
          divider: amber[200],
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#222222',
            dark: '#222222',
          },
          secondary: {
            main: deepOrange[700],
          },
          light: '#222222',
          divider: deepOrange[700],
          background: {
            default: '#222222',
          },
        }),
  },
});

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

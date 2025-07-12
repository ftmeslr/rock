import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'; 


const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
  },
});
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}


export default appWithTranslation(App);

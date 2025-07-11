import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { MyButton } from 'ui';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <p>asdasdasdasd</p>


    <div>
      <h1>Hello from Next.js</h1>
      <MyButton />
    </div>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

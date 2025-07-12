import { useTranslation } from 'next-i18next';
import { Box, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import {MainButton} from '@rock/ui';

const LoginPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common'); // works because page loaded translation

  const switchTo = (lang: 'en' | 'fa') => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <>
        <button onClick={() => switchTo('en')}>English</button>
        <button onClick={() => switchTo('fa')}>فارسی</button>
      </>
      <Box width="100%" maxWidth={500} p={4} borderRadius={10} boxShadow={3} bgcolor="#3C3C3C" paddingX={"80px"}>
        <Typography variant="h5" mb={3} textAlign="center">
          {t('login')}
        </Typography>
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <MainButton variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          {t('login')}
        </MainButton>
      </Box>
    </Box>
  );
};

export default LoginPage;

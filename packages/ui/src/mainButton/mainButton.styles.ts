import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

const MainButtonStyled = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '24px',
  boxShadow: 'none',
  height:'48px',

  '&:hover': {
    boxShadow: 'none',
  },

  '&.MuiLoadingButton-loading': {
    color: 'transparent !important',
  },

  '&.MuiButton-contained': {
    color: theme.palette.common.white,
  },
}));

export default MainButtonStyled;

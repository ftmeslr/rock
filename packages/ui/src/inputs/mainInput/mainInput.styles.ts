// mui
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

import { IStyledMainInput } from './mainInput.types';

const StyledMainInput = styled(TextField)<IStyledMainInput>(
  ({ theme, bgcolor = '#F8F8F8' }) => ({
    'label.MuiInputLabel-shrink': {
      color: `${theme.palette.grey[500]} !important`,
      top: '1px',
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: '1.1rem',
      overflow: 'hidden',
      height: '4.8rem',
      backgroundColor: `${bgcolor}`,
      fontSize: '1.2rem',

      '& .MuiOutlinedInput-input': {
        textAlign: 'left ',
      },

      '&:hover': {
        '& fieldset': {
          borderColor: theme.palette.grey[300], // change the border color here ,
        },
      },

      '& fieldset': {
        borderColor: theme.palette.grey[200], // change the border color here ,
      },

      '& input::placeholder': {
        opacity: 1,
        color: theme.palette.grey[400],
      },

      '&.Mui-focused': {
        '& fieldset': {
          borderColor: theme.palette.primary.main, // change the border color here ,
        },
      },

      // On Disabled
      '&.Mui-disabled': {
        background: theme.palette.grey[100],
        cursor: 'not-allowed',

        '& input': {
          cursor: 'not-allowed',
        },
      },
    },
    '& .MuiInputBase-input:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
    },
    //inner label
    '& label': {
      fontSize: '1.2rem',
      color: `${theme.palette.grey[400]} !important`,
    },
  })
);

const mainInputStyles = {
  StyledMainInput,
};

export default mainInputStyles;

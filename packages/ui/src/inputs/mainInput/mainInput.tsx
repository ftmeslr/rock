import { FC } from 'react';

import { Stack, TextFieldProps, Typography } from '@mui/material';

import styles from './mainInput.styles';
import { IMainInputProps } from './mainInput.types';

const MainInput: FC<TextFieldProps & IMainInputProps> = ({
  label,
  size,
  bgcolor,
  innerLabel,
  ...params
}) => {
  const { StyledMainInput } = styles;
  return (
    <Stack spacing={1}>
      {label && (
        <Typography className='input-label'>
          {label}
        </Typography>
      )}
      <StyledMainInput
        size={size}
        bgcolor={bgcolor}
        {...params}
        label={innerLabel || null}
      />
    </Stack>
  );
};

export default MainInput;
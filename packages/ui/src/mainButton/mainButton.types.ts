import { ReactNode } from 'react';

import { LoadingButtonProps } from '@mui/lab';

export interface IMainButtonProps extends LoadingButtonProps {
  children: ReactNode;
}

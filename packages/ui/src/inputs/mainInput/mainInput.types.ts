import { Theme } from '@mui/material';
import { SystemProps } from '@mui/system';

export interface IStyledMainInput extends SystemProps<Theme> {
  bgcolor?: string;
}

export type IMainInputProps = {
  innerLabel?: string | null;
  bgcolor?: string;
};
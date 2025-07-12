import { FC } from 'react';

// import { useTheme } from '@mui/material';

// import Loading from '../../loading/loading';
import MainButtonStyled from './mainButton.styles';
import { IMainButtonProps } from './mainButton.types';

const MainButton: FC<IMainButtonProps> = ({ children, ...props }) => {
  // const theme = useTheme();
  return (
    <MainButtonStyled 
    // loadingIndicator={<Loading />} 
    // theme={theme} 
    {...props}>
      {children}
    </MainButtonStyled>
  );
};

export default MainButton;
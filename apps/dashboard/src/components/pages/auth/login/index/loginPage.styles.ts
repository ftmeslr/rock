import { TSxStyles } from '@rock/types';

const divFormSx: TSxStyles = (props) => ({
  background: props?.theme?.palette.secondary.light,
  textAlign: 'center',
  padding: '64px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  height: '100%',
  position: 'relative',
  zIndex: '50',
  '&:before': {
    background: `url(/images/auth/login/bottomLogin.svg)`,
    width: '243px',
    height: '242px',
    content: '" "',
    position: 'absolute',
    left: '20px',
    bottom: '50px',
    zIndex: '-1',
  },
  '&:after': {
    background: `url(/images/auth/login/topLogin.svg)`,
    width: '272px',
    height: '272px',
    content: '" "',
    position: 'absolute',
    right: '25px',
    top: '9px',
    zIndex: '-1',
  },
});
const divLoginSx: TSxStyles = (props) => ({
  background: props?.theme?.palette.background.paper,
  borderRadius: '16px',
  width: '460px',
  padding: '64px 24px',
  boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
  minHeight: '600px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
const divTextFieldSx: TSxStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  paddingBottom: '32px',
});
const descriptionSx: TSxStyles = () => ({
  // color: props?.theme?.palette.greyTwo['600'],
  paddingTop: '8px',
  paddingBottom: '24px',
});
const slideBoxSx: TSxStyles = () => ({
  background: `url(/images/auth/login/loginBG.svg)`,
  backgroundSize: 'cover',
});
const sliderContentSx: TSxStyles = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});
const sliderTextSx: TSxStyles = (props) => {
  const mdBreakpoints = props?.theme?.breakpoints.up('md') || '';
  return {
    width: '400px',
    padding: '20px',
    textAlign: 'center',
    [mdBreakpoints]: {
      width: '745px',
    },
    // color: props?.theme?.palette.greyTwo?.main,
    marginTop: '150px',
    fontSize: '16px',
  };
};

const linkStyleSx: TSxStyles = (props) => ({
  color: props?.theme?.palette.primary.main,
  textDecoration: 'none',
  marginLeft: '6px',
});

const noAccountSx: TSxStyles = () => ({
  // color: props?.theme?.palette.greyTwo['600'],
});

const buttonSx: TSxStyles = () => ({
  height: '48px',
});

const loginPageStyles = {
  divFormSx,
  divLoginSx,
  divTextFieldSx,
  descriptionSx,
  slideBoxSx,
  sliderContentSx,
  sliderTextSx,
  linkStyleSx,
  buttonSx,
  noAccountSx,
};

export default loginPageStyles;

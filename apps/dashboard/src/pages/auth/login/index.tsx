import LoginPage from '../../../components/pages/auth/login/index/loginPage';
import { withTranslation } from '../../../lib/withTranslation';

const Login = () => <LoginPage />;

export const getStaticProps = withTranslation(['common']);
export default Login;

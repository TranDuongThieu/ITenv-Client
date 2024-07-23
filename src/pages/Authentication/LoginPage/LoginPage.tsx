import LoginFormComponent from './LoginForm/LoginForm.component';
import './LoginPage.style.scss';
const LoginPage = () => {
  // const navigate = useNavigate();
  // const handleLogin = (values: any) => {
  //   console.log(values);
  // };
  return (
    <div className="rive-story-container-login">
      <LoginFormComponent />
    </div>
  );
};

export default LoginPage;

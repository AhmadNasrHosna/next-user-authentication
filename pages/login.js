import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";
import { authInitialProps } from "../lib/auth";

function Login(props) {
  return (
    <Layout pageTitle="Sign in to our app" docTitle="Login" {...props}>
      <LoginForm />
    </Layout>
  );
}

Login.getInitialProps = authInitialProps(true);

export default Login;

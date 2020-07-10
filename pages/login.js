import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

function Login() {
  return (
    <Layout pageTitle="Sign in to our app" docTitle="Login">
      <LoginForm />
    </Layout>
  );
}

export default Login;

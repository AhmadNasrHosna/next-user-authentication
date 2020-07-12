import Layout from "../components/Layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";

function Home(props) {
  const { user = {} } = props.auth || {};

  return (
    <Layout pageTitle="Home" docTitle="Home" {...props}>
      <p>
        {user.email ? (
          <>
            Welcome, {user.name}, go to your{" "}
            <Link href={`/${user.email ? "profile" : "login"}`}>
              <a>profile</a>
            </Link>
            .
          </> //
        ) : (
          <>
            <Link href="/login">
              <a>Sign in</a>
            </Link>{" "}
            to our app.
          </> //
        )}
      </p>
    </Layout>
  );
}

Home.getInitialProps = authInitialProps();

export default Home;

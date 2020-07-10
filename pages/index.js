import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout pageTitle="Home" docTitle="Home">
      <p>
        <Link href="/login">
          <a>Sign in</a>
        </Link>{" "}
        to our app.
      </p>
    </Layout>
  );
}

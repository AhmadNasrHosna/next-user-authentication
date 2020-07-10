import Link from "next/link";
import Head from "next/head";
import Router, { useRouter } from "next/router";

// https://github.com/vercel/next.js/issues/1935#issuecomment-648660605

function Layout({ children, pageTitle, docTitle, userFullName }) {
  const router = useRouter();

  return (
    <div className="o-page">
      <Head>
        <title>{docTitle || "Next Hacker"}</title>
      </Head>
      <header>
        <h1
          data-first-litter={
            router.pathname === "/"
              ? "👋"
              : router.pathname === "/profile"
              ? userFullName.split("")[0]
              : "😎"
          }
        >
          {router.pathname === "/"
            ? "Welcome, Guest"
            : router.pathname === "/profile"
            ? userFullName
            : docTitle}
        </h1>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign out
          </a>
        </nav>
      </header>
      <main className="o-main">
        <h2 className="c-page-title">
          {router.pathname === "/" ? "Welcome, Guest" : pageTitle}
        </h2>

        {children}
      </main>
      <footer>
        <span>
          A Hacker News clone made with Next.js -{" "}
          <a href="http://ahmedhosna.netlify.com/" target="blank">
            {" "}
            Ahmed Hosna
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </span>
      </footer>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

        body {
          max-width: 920px;
          margin: 0 auto;
          font-size: 16px;
          color: #343434;
          font-family: Quicksand, system-ui, sans-serif;
          padding: 0 0.75rem;
          scroll-behavior: smooth;
          background-attachment: fixed;
          min-height: 100vh;
          word-wrap: break-word;
          background: linear-gradient(
            180deg,
            hsla(0, 0%, 0%, 0.015),
            transparent
          );
        }

        @media (min-width: 992px) {
          body {
            padding: 0;
          }
        }

        a {
          text-decoration: none;
          color: #0055cc;
          transition: all 250ms ease, transform 0ms;
        }

        a:active {
          transform: translateY(1px);
        }

        .o-main a:hover {
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .o-main {
            padding: 2rem 0;
          }
        }

        header h1 {
          font-size: 26px;
          letter-spacing: -0.04em;
          font-weight: 800;
          display: flex;
          align-items: center;
          margin: 0 0 2rem 0;
          flex-direction: column;
        }

        header h1:before {
          content: attr(data-first-litter);
          width: 80px;
          height: 80px;
          margin: 0 0 0.8rem;
          background-color: #0055cc;
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 82%;
          letter-spacing: 0;
          border: 8px solid hsla(210, 100%, 90%, 1);
        }

        @media (min-width: 300px) {
          header h1 {
            flex-direction: row;
            font-size: 30px;
          }

          header h1:before {
            margin: 0 1rem 0 0;
          }
        }

        @media (min-width: 768px) {
          header h1 {
            font-size: 40px;
            margin: 0;
          }
        }

        footer,
        header {
          padding: 2rem 0;
        }

        @media (min-width: 768px) {
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          footer,
          header {
            padding: 3rem 0;
          }
        }

        footer {
          font-size: 16px;
          line-height: 1.5;
        }

        footer a:hover {
          text-decoration: underline;
        }

        nav {
          box-shadow: 0 3px 7px rgba(238, 238, 238, 0.5);
        }

        @media (min-width: 768px) {
          nav {
            display: block;
          }
        }

        nav a {
          padding: 0.6em 1em 0.45em;
          background: hsla(210, 50%, 95%, 1);
          color: #0055cc;
          letter-spacing: 0.014em;
          transition: all 200ms ease, transform 0ms;
          font-weight: 600;
          border-bottom: 3px solid transparent;
          display: inline-block;
          font-size: 14px;
        }

        nav a:not(:last-child) {
          border-right: 1px solid hsla(210, 50%, 90%, 1);
        }

        nav a:first-child {
          border-radius: 5px 0 0 5px;
        }

        nav a:last-child {
          border-radius: 0 5px 5px 0;
        }

        nav a:hover {
          background: hsla(210, 50%, 88%, 1);
          border-bottom-color: #0055cc;
        }

        pre {
          white-space: pre-wrap;
          background: hsla(210, 35%, 93%, 1);
          color: hsla(210, 30%, 30%, 1);
          padding: 1rem;
          border-radius: 5px;
          line-height: 1.5;
          font-size: 16px;
          letter-spacing: 0.02em;
        }

        .c-page-title {
          border-bottom: 1px solid hsla(210, 33%, 95%, 1);
          padding-bottom: 0.4em;
          margin-bottom: 1.8rem;
          color: #454545;
        }

        form {
          max-width: 400px;
        }

        input {
          width: 100%;
          max-width: 100%;
          padding: 1em;
          box-sizing: border-box;
          font: inherit;
          font-size: 16px;
          border: 1px solid hsla(0, 0%, 30%, 1);
          border-radius: 4px;
          outline: none;
          transition: all 200ms ease;
        }

        input:hover,
        input:focus,
        button:hover,
        button:focus {
          box-shadow: 0 8px 9px hsla(0, 0%, 0%, 0.13),
            0 0 0 3px hsla(0, 0%, 0%, 0.12) !important;
          border-color: hsla(0, 0%, 20%, 1) !important;
        }

        .form-control {
          margin-bottom: 1.1rem;
        }

        form button[type="submit"] {
          font: inherit;
          font-size: 20px;
          letter-spacing: -0.01em;
          font-weight: 700;
          padding: 0.75em 2em;
          cursor: pointer;
          background: #343434;
          border: 0;
          color: #fff;
          border-radius: 4px;
          outline: 0;
          transition: all 200ms ease;
          box-shadow: 0 8px 9px hsla(0, 0%, 0%, 0.13);
        }

        form button[type="submit"]:hover {
          background: #212121;
        }

        form button[type="submit"]:disabled {
          opacity: 0.5;
          cursor: default;
          box-shadow: none !important;
        }

        .c-error {
          margin-top: 2rem;
          color: hsla(0, 50%, 50%, 1);
          background: hsla(0, 50%, 97%, 1);
          padding: 0.75em 0.75em;
          border-radius: 6px;
          box-shadow: 0 1px 5px hsla(0, 47%, 95%, 1);
          border: 1px solid hsla(0, 47%, 95%, 1);
        }
      `}</style>
    </div>
  );
}

export default Layout;

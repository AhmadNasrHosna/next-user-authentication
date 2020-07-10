import { useState } from "react";
import { loginUser } from "../lib/auth";
import Router from "next/router";

function LoginForm() {
  const [email, setEmail] = useState("Shanna@melissa.tv");
  const [password, setPassword] = useState("anastasia.net");
  const [error, SetError] = useState("");
  const [isSending, SetIsSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    SetError("");
    SetIsSending(true);

    loginUser(email, password)
      .then(() => {
        Router.push("/profile");
      })
      .catch(showError);
  }

  function showError(err) {
    console.error(err);
    const errMsg = (err.response && err.response.data) || err.message;
    SetError(errMsg);
    SetIsSending(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email.toLowerCase()}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending" : "Sign in"}
      </button>
      {error && <div className="c-error">{error}</div>}
    </form>
  );
}

export default LoginForm;

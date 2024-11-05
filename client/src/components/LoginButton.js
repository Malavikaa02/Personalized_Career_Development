// src/components/LoginButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>Continue with Google</button>
  );
}

export default LoginButton;

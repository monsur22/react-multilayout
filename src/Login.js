import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const login = () => {
    navigate("main");
  };
  return (
    <div>
      <h1>login</h1>
      <button onClick={login}>click</button>
    </div>
  );
}

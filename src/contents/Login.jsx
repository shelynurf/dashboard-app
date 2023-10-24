import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

const Login = () => {
  const auth = {
    user: {
      username: "user",
      password: "user",
    },
    admin : {
      username: "admin",
      password: "admin",
    },
  };

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [isError, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username === auth.user.username && state.password === auth.user.password) {
        sessionStorage.setItem("token", "isUser")
        window.location.replace("/")
    }
    else if (state.username === auth.admin.username && state.password === auth.admin.password) {
      sessionStorage.setItem("token", "isAdmin")
      window.location.replace("/")
    }
    else {setError(true)}
  };

  return (
    <div className="login-page">
      <Card>
        <h1 className="title">Welcome Back!</h1>
        {isError && <p style={{color: "red"}}>Username and Password Incorrect</p>}
        <form className="form" onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Button>Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;

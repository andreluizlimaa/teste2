import React, { useState } from "react";
import "./loginform.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';



const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

      fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      .then(response => {
        if (response.ok) {
          navigate('/propostas');
        } else {
          console.error('Login failed');
        }
      })
      .catch(error => console.error(error));
  };

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  return (
    <div className="cover">
      <h1> Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="login-btn"  type="submit">Send</button>
      </form>

      <button className="register"> <Link to = "/teste3">Login</Link></button>
      <p className="text">Or login using</p>
      <div className="alt-login">
        <div className="google"><FaGoogle /></div>
        <div className="facebook"><FaFacebook /></div>
      </div>

      <div className={popupStyle} >
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>

    </div>
  )
}

export default RegisterForm;

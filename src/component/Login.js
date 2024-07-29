// src/components/Login.js
import React, { useState } from "react";
import "./Login.css"; // Make sure to import the CSS file
// import singlebuffalo from '../components/imagesDa/singlebuffalo.jpg';


function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the username and password here
    const { username, password } = formData;
    const usersData = require("../users.json");
    const users = usersData.users;

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      onLogin();
      //   alert("Login successful!");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="ring" 
    // style={{
   
     >
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="login">
        <h2>Login To web</h2>
        <div className="inputBx">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="inputBx">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sign in" onClick={handleSubmit} />
        </div>
        {/* <div className="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div> */}
      </div>
    </div>
  );
}

export default Login;

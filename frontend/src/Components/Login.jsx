import React, { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const btnHandler = async () => {
    if (!email) {
      alert("Email Required");
    } else {
      if (!validator.isEmail(email)) {
        alert("Please provide correct E-mail");
      }
    }

    if (!password) {
      alert("password required");
    }
     else if (
        !validator.isStrongPassword(password, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        alert(
          "Password must contain 8 digits, 1 special character ,alphanumeric characters "
        );
      }
      else{
        localStorage.setItem('user',JSON.stringify({email:email,password:password}))
      }
    
  };
  const logoutHandler=()=>{
    localStorage.clear()
    setEmail('')
    setPassword('')
    navigate('/')
  }
  return (
    <div style={{backgroundColor:'palegreen'}}>
      <h1>Hello User ....</h1>
      <br />
      <br />
      <input type="text" placeholder="E-mail" value={email} onChange={emailHandler} />
      <br />
      <input type="text" placeholder="Password" value={password} onChange={passwordHandler} />
      <br />
      <br />
      <div>
        <button onClick={btnHandler}>Login</button>
      </div>
      <br /><br />
      <button
        onClick={() => {
          navigate("/signup");
        }}
        style={{backgroundColor:'orange'}}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          navigate("/forgot");
        }}
      >
        Forgot Password
      </button>
      <button onClick={logoutHandler}   style={{backgroundColor:'orange'}}>Logout</button>
    </div>
  );
};

export default Login;

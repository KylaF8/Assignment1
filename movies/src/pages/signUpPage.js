import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const register = () => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/; 
    const consecutiveSequence = /(.)\1\1/;

  if (!strongPasswordRegex.test(password)) {
    setErrorMessage("Your password must be at least 7 characters long, including an uppercase letter, a lowercase letter, at least 2 numbers, as well as contain a special character.");
    return;
  }
  if (consecutiveSequence.test(password)) {
    setErrorMessage("Your password shouldn't contain sequences of three or more repeated characters.");
    return;
  }
  if (password !== passwordAgain) {
    setErrorMessage("The passwords you have entered are not the same. Please make sure your passwords match.");
    return;
  }
  if (!validateUsername(userName)) {
      setErrorMessage("Username must be 2-17 characters and can only contain letters and numbers.");
      return;
    }

  context.register(userName, password);
  setRegistered(true);
  setErrorMessage(""); 
}

const validateUsername = (username) => {
  const usernameRegex = /^[A-Za-z0-9]{2,17}$/;
  return usernameRegex.test(username);
};

if (registered === true) {
  return <Navigate to="/login" />;
}

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      <input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={register}>Register</button>
    </>
  );
    };


export default SignUpPage;
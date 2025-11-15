import { useState } from 'react';
import openEye from './assets/eye-svgrepo-com.svg';
import closedEye from './assets/eye-no-svgrepo-com.svg';

function Login(params) {

  // These are the credentials that we'll accept as valid.
  const validCredentials = [
    {"email": "test@example.com", "password": "a1234567"},
    {"email": "test2@example.com", "password": "password1"}
  ];

  // to toggle password show/hide 
  const [showPW, setShowPW] = useState(false);
  // to let the user know their credentials are invalid
  const [invalidCredMsg, setInvalidCredMsg] = useState("");

  function toggleShowPW(e) {
    e.preventDefault();
    setShowPW(!showPW);
  }

  // handles login form submission
  // resets form after successful login
  function handleSubmit(e) {
    e.preventDefault();
    params.setUserEmail("test");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    if(validateCreds(emailInput, passwordInput)) {
      // case: valid credentials 
      params.setUserEmail(emailInput.value);
      const form = document.querySelector("form");
      form.reset();
      emailInput.classList.remove("checked");
      passwordInput.classList.remove("checked");

      params.setLoggedIn(!params.loggedIn);
    }
  }

  // checks if email and password are valid, sets error message
  // returns boolean
  function validateCreds(email, password) {
    for (const cred of validCredentials) {
      if (cred.email == email.value) {
        if (cred.password == password.value) {
          // case 1: both are valid, user can login
          setInvalidCredMsg("");
          return true;
        }
        setInvalidCredMsg("Incorrect Password");
        return false;
        // case 2: email is valid, password is invalid 
      }
    }
    // case 3: both are invalid 
    setInvalidCredMsg("Invalid Credentials");
    return false;
  }

  // I want to warn the user that their inputs don't follow the correct format before they submit, but I also don't want to annoy them with warnings while they're typing initially.
  // This function sets a "checked" flag to the inputs after the user unfocuses from them for the first time. If the input is invalid at this point, the user will be shown a red border denoting this
  function addCheckedClass(e) {
    if (!e.target.classList.contains("checked")){
      e.target.classList.add("checked");
    }
  }

  return (
    <div className={"login" + (params.loggedIn ? ' hidden' : '')}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={"invalid-creds" + ((invalidCredMsg == "") ? " hidden" : "")}>{invalidCredMsg}</div>
        <div className="form-field">
          <label htmlFor="email" >Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={e => addCheckedClass(e)}
            required
          ></input>
        </div>
        <div className="form-field ">
          <label htmlFor="password" >Password*</label>
          <div className="password-field">
            <input
              type={showPW ? "text" : "password"}
              id="password"
              name="password"
              minLength="8" 
              maxLength="16"
              pattern="(?=.*[a-zA-Z])(?=.*\d).*"
      title="Please ensure that your password contains at least one letter and one number"
              onBlur={e => addCheckedClass(e)}
              required
            >
            </input>
            <button 
              type="button" 
              className={"icon-button " + (showPW ? 'hidden' : '')} 
              onClick={(e) => toggleShowPW(e)}
            >
              <img className="eyecon" alt="hide password" src={openEye}/>
            </button>
            <button 
              type="button" 
              className={"icon-button " + (showPW ? '' : 'hidden')} 
              onClick={(e) => toggleShowPW(e)}
            >
              <img className="eyecon" alt="show password" src={closedEye} />
            </button>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;

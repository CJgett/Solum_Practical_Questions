import React from 'react';

function Welcome(params) {
  
  function handleLogout(e) {
    e.preventDefault();
    params.setLoggedIn(!params.loggedIn);
  }
  return (
    <div className={"login welcome " + (params.loggedIn ? '' : 'hidden')}>
        <h1>Welcome, {params.userEmail}</h1>
        <button onClick={e => handleLogout(e)}>
        Logout
        </button>
    </div>
  )
}

export default Welcome;

import { useState } from 'react'
import './App.css'
import Login from './Login.jsx';
import Welcome from './Welcome.jsx';

import solumLogo from './assets/solum_logo.svg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <main>
      <div className="login-container">
        <img alt="Solum Logo" className="logo" src={solumLogo}/>
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserEmail={setUserEmail}/>
        <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} userEmail={userEmail}/>
      </div>
    </main>
  )
}

export default App;

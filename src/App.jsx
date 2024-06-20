import React, { useState } from 'react';
import './App.css';
import Weather from './Weather';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Login setUser={setUser} />
      {user && <Weather user={user} />}
    </div>
  );
}

export default App;

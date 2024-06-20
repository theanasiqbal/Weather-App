import React, { useState, useEffect } from 'react';
import { auth, signInWithGoogle, logOut } from './firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

const Login = ({ setUser }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        setUserProfilePic(user.photoURL); // Set user's profile picture
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setUserProfilePic('');
      }
    });
    return () => unsubscribe();
  }, [setUser]);

  return (
    <div className="fixed top-0 right-0 m-4 z-10">
      {isAuthenticated ? (
        <div className="flex items-center">
          <img src={userProfilePic} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
          <button onClick={logOut} className="bg-red-500 text-white py-2 px-4 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="bg-blue-500 text-white py-2 px-4 rounded">
          Login with Google
        </button>
      )}
    </div>
  );
};

export default Login;

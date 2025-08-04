import React from 'react';
import { AppContent } from '../context/AppContext';

const Profile = () => {
    const { backendUrl , setIsLoggedIn , userData } = React.useContext(AppContent);
console.log(userData)
  return (
    <div>
      <h1>Profile</h1>
      {/* <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p> */}
    </div>
  )
}

export default Profile
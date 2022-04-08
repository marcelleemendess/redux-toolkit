import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  //select teh user state
  const user = useSelector((state) => state.user.value);

  // select the theme state
  const themeColor = useSelector((state) => state.theme.value);

  return (
  
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
   
  );
}

export default Profile

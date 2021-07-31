import React from "react";

function Dashboard({ user, SignOut }) {
  console.log(user);
  console.log(user.photoURL);

  return (
    <div>
      <div>{user.displayName}</div>
      <div>{user.email}</div>
      {SignOut}

      <img alt="profile" src={user.photoURL} />
      <h1>This is another page!</h1>
    </div>
  );
}

export default Dashboard;

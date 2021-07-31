import React from "react";
import Button from "@material-ui/core/Button";

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
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Dashboard;

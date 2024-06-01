import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>cotact: {contact}</h3>
    </div>
  );
};

export default User;

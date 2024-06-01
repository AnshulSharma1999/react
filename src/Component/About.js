import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor.");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount.");
  }
  render() {
    // console.log("Parent Render.");
    return (
      <div>
        <h1>About</h1>
        <h3>Welcome to about us page.</h3>
        <UserClass
          name={"Vishal"}
          location={"Gurdaspur"}
          contact={"vishal@10"}
        />
      </div>
    );
  }
}

export default About;

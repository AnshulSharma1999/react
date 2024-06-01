import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        login: "dummyName",
        id: "dummyLocation",
      },
    };
    console.log(this.props.name + " Child constructor.");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anshul10");
    const json = await data.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Componet Did Update Called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount is Called");
  }
  render() {
    console.log(this.props.name + " Child render.");
    const { login, id } = this.state.userinfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {id}</h3>
      </div>
    );
  }
}

export default UserClass;

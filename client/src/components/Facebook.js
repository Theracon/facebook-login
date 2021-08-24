import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    picture: "",
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      picture: response.picture.data.url,
    });
    console.log(response);
  };

  componentClicked = () => {
    console.log("clicked");
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome, {this.state.name}!</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="1027560801337020"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

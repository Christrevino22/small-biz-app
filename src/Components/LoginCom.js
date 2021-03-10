import React, { Component } from "react";
import "../Login.css";
import { Container, Button, TextField } from "@material-ui/core";

class LoginCom extends Component {
  state = {
    login: false,
  };
  handleClick = () => {
    console.log("you are loged in!!!", this.state.login);
    this.setState({ login: !this.state.login });
    // console.log(process.env);
  };

  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          width: "450px",
          paddingTop: "75px",
        }}
      >
        <TextField label="USERNAME"> </TextField>
        <TextField label="PASSWORD"> </TextField>
        <Button
          variant="contained"
          style={{ backgroundColor: "smoke" }}
          onClick={this.handleClick}
        >
          Login
        </Button>
      </Container>
    );
  }
}
export default LoginCom;

{
  /* {props.person.map((per, idx) => { */
}
{
  /* return <h1 key={idx}>{per}</h1>; */
}
{
  /* })} */
}

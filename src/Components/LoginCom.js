import React from "react";
import "../Login.css";
import { Container, Button, TextField } from "@material-ui/core";

const LoginCom = (props) => {
  console.log("I HAVE ACCESS TO THE PROPS", props.loggedIn);
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
        onClick={() => {
          // !props.loggedIn;
        }}
      >
        Login
      </Button>
    </Container>
  );
  console.log("after!!!!!!!", props.loggedIn);
};
export default LoginCom;

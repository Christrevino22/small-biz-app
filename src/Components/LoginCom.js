import React from "react";
import "../Login.css";
import { Container, Button, TextField } from "@material-ui/core";

const LoginCom = () => {
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
      <Button variant="contained" style={{ backgroundColor: "smoke" }}>
        Login
      </Button>
    </Container>
  );
};
export default LoginCom;

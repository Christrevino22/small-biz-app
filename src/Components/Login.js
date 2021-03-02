import React from "react";
import "../Login.css";
import { Container, Button, TextField } from "@material-ui/core";

const Login = () => {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", width: "450px" }}
    >
      <TextField label="USERNAME"> </TextField>
      <TextField label="PASSWORD"> </TextField>
      <Button variant="contained" style={{ backgroundColor: "smoke" }}>
        Login
      </Button>
    </Container>
  );
};
export default Login;

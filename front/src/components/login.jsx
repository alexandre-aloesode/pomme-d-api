import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

function UserLogin() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("tarace");

  function handleLogin() {
    const userData = new FormData();
    userData.append("email", email);
    userData.append("password", password);
    fetch("http://localhost/pomme-d-api/back/login", {
      method: "POST",
      body: userData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       if(data.success === true){
         setMessage(data.message);
       }
      });
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        autoComplete="current-password"
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <div>
        <p>{message}</p></div>
    </Box>
  );
}

export default UserLogin;

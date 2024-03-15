import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { dbPost } from "../api/database.jsx";
import NavBar from "./navBar.jsx";

function UserRegister() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  async function handleRegister() {
    const userData = new FormData();
    userData.append("email", email);
    userData.append("password", password)
    
    const request = await dbPost("register", userData);
    setMessage(request.message);
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
      <Button variant="contained" onClick={handleRegister}>
        Register
      </Button>
      <div>
        <p>{message}</p></div>
    </Box>
  );
}

export default UserRegister;

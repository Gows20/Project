import { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/users", { email, password });
      alert("Sign-up successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignup}
        sx={{ mt: 2 }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;

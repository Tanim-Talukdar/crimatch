import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Snackbar } from '@mui/material';
import { AuthContext } from '../context/authcontext';

export default function Authentication() {
  const [email, setemail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(email, password);
        console.log("Login Done");
      }
      if (formState === 1) {
        let result = await handleRegister(name, email, password);
        console.log(result);
        setemail("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (err) {
      console.log(err);
      let message = err.response?.data?.message || "Something went wrong";
      setError(message);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '88vh', overflow: 'hidden' }}>
      {/* Background Removed (Spline deleted) */}

      {/* Centered Auth Card */}
      <Box
        sx={{
          zIndex: 1,
          width: '90%',
          maxWidth: '400px',
          margin: 'auto',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          padding: '30px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#00b894' }}>
          <LockOutlinedIcon />
        </Avatar>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button
            variant={formState === 0 ? "contained" : "outlined"}
            sx={{
              backgroundColor: formState === 0 ? '#00b894' : 'transparent',
              color: formState === 0 ? '#fff' : '#00b894',
              borderColor: '#00b894',
              '&:hover': {
                backgroundColor: '#00a383',
              },
            }}
            onClick={() => { setFormState(0); setError(""); }}
          >
            Sign In
          </Button>

          <Button
            variant={formState === 1 ? "contained" : "outlined"}
            sx={{
              backgroundColor: formState === 1 ? '#00b894' : 'transparent',
              color: formState === 1 ? '#fff' : '#00b894',
              borderColor: '#00b894',
              '&:hover': {
                backgroundColor: '#00a383',
              },
            }}
            onClick={() => { setFormState(1); setError(""); }}
          >
            Sign Up
          </Button>
        </div>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          {formState === 1 && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            autoFocus
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p style={{ color: "red", margin: "10px 0" }}>{error}</p>

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#00b894',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#00a383',
              },
            }}
            onClick={handleAuth}
          >
            {formState === 0 ? "Login" : "Register"}
          </Button>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

import { Button, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';

function Register() {
  const _700 = useMediaQuery('(min-width:700px)');
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggleLogin = () => {
    setLogin(!login);
  };
  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    console.log(data);
  };
  const handleRegister = () => {
    const data = {
      userName,
      email,
      password,
    };
    console.log(data);
  };
  return (
    <>
      <Stack
        width={'100%'}
        height={'100vh'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={
          _700
            ? {
                background: "url('/public/register-bg.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 600px',
              }
            : null
        }
      >
        <Stack flexDirection={'column'} width={_700 ? '40%' : '90%'} gap={2} mt={_700 ? 20 : 0}>
          <Typography
            variant="h5"
            fontSize={_700 ? '1.5rem' : '1rem'}
            fontWeight={'bold'}
            alignSelf={'center'}
          >
            {login ? ' Login With Email' : 'Register With Email'}
          </Typography>
          {login ? null : (
            <TextField
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
              variant="outlined"
              placeholder="Enter Your UserName...."
            />
          )}
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            variant="outlined"
            placeholder="Enter Your Email...."
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            variant="outlined"
            placeholder="Enter Your Password...."
          />
          <Button
            onClick={login ? handleLogin : handleRegister}
            size="large"
            sx={{
              width: '100%',
              height: 52,
              bgcolor: 'green',
              color: 'white',
              fontSize: '1rem',
              ':hover': { bgcolor: 'blue', cursor: 'pointer' },
            }}
          >
            {login ? 'Log In' : 'Sign Up'}
          </Button>
          <Typography variant="subtitle2" alignSelf={'center'} fontSize={'1.3rem'}>
            {login ? "Don't have an account ?" : ' Already have an account ?'}
            <span onClick={toggleLogin} className="login-link">
              {login ? 'Sign Up' : 'Login'}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default Register;

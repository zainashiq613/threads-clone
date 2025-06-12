import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        width={'100%'}
        height={'100vh'}
        justifyContent={'center'}
        flexDirection={'row'}
        alignItems={'center'}
        sx={{
          background: "url('/public/error-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Stack
          p={5}
          border={'2px solid black'}
          bgcolor={'wheat'}
          borderRadius={'10px'}
          flexDirection={'column'}
          alignItems={'center'}
          gap={2}
          boxShadow={'7px 7px 7px white'}
        >
          <Typography variant="h3">OOP's</Typography>
          <Typography variant="h6">You Entered Wrong Location</Typography>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            size="large"
            sx={{
              bgcolor: 'blue',
              color: 'white',
              borderRadius: '10px',
              p: 2,
              ':hover': { bgcolor: 'green', cursor: 'pointer' },
            }}
          >
            Go Back
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default Error;

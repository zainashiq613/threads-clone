import { Stack, CircularProgress } from '@mui/material';
function Loader() {
  return (
    <div>
      <Stack
        flexDirection={'row'}
        minHeight={'50vh'}
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        my={'5px'}
      >
        <CircularProgress color="success" />
      </Stack>
    </div>
  );
}

export default Loader;

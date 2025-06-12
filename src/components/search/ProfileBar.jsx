import { Avatar, Button, Stack, Typography, useMediaQuery } from '@mui/material';

function ProfileBar() {
  const _700 = useMediaQuery('(min-width=700px)');
  return (
    <>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        px={1}
        py={2}
        mx={'auto'}
        width={'100%'}
        boxShadow={'5px 5px 5px gray'}
        borderRadius={'15px'}
        sx={{ ':hover': { cursor: 'pointer' } }}
      >
        <Stack flexDirection={'row'} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={'column'}>
            <Typography variant="h6" fontSize={_700 ? '1rem' : '0.9rem'} fontWeight={'bold'}>
              zain_20015
            </Typography>
            <Typography variant="caption" fontSize={_700 ? '1rem' : '0.75rem'} color={'gray'}>
              this is bio
            </Typography>
            <Typography variant="caption" fontSize={_700 ? '1rem' : '0.9rem'}>
              3 followers
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="medium"
          sx={{ border: '1px solid gray', borderRadius: '10px', p: 2, height: 40 }}
        >
          Follow
        </Button>
      </Stack>
    </>
  );
}

export default ProfileBar;

import { Avatar, AvatarGroup, Badge, Stack, Stepper, useMediaQuery } from '@mui/material';
import React from 'react';

function PostOne() {
  const _700 = useMediaQuery('(min-width:700px)');
  return (
    <>
      <Stack flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Avatar
              alt=""
              src=""
              sx={{
                width: _700 ? 20 : 14,
                height: _700 ? 20 : 14,
                bgcolor: 'green',
                position: 'relative',
                right: _700 ? 4 : 0,
                bottom: _700 ? 4 : 0,
              }}
            >
              +
            </Avatar>
          }
        >
          <Avatar alt="" src="" sx={{ width: _700 ? 40 : 32, height: _700 ? 40 : 32 }}></Avatar>
        </Badge>
        <Stack flexDirection={'column'} alignItems={'center'} gap={2} height={'100%'}>
          <Stepper
            orientation={'vertical'}
            activeStep={0}
            sx={{ border: '0.1rem solid gray', width: '0px', height: '100%' }}
          ></Stepper>
          <AvatarGroup
            total={3}
            sx={{
              '& .MuiAvatar-root': {
                width: _700 ? 24 : 16,
                height: _700 ? 24 : 16,
                fontSize: _700 ? 12 : 8,
              },
            }}
          >
            <Avatar src="" alt="" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </>
  );
}

export default PostOne;

import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { IoIosMore } from 'react-icons/io';

function Comments() {
  return (
    <>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        px={2}
        pb={4}
        borderBottom={'1px solid gray'}
        mx={'auto'}
        width={'90%'}
      >
        <Stack flexDirection={'row'} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={'column'}>
            <Typography variant="h6" fontSize={'0.9rem'} fontWeight={'bold'}>
              zain_20015
            </Typography>
            <Typography variant="subtitle2" fontSize={'0.9rem'}>
              This is a comment
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={'row'}
          gap={1}
          alignItems={'center'}
          color={'grayText'}
          fontSize={'0.9rem'}
        >
          <p>24min</p>
          <IoIosMore size={28} />
        </Stack>
      </Stack>
    </>
  );
}

export default Comments;

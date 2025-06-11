import { Stack } from '@mui/material';
import React from 'react';
import Comments from '../../../components/home/post/Comments';

function Replies() {
  return (
    <>
      <Stack flexDirection={'column'} gap={2} width={'800px'} mx={'auto'}>
        <Comments />
      </Stack>
    </>
  );
}

export default Replies;

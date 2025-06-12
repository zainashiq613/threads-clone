import { Button, Stack } from '@mui/material';
import React from 'react';
import Input from '../../components/home/Input';
import Post from '../../components/home/Post';

function Home() {
  return (
    <>
      <Input />
      <Stack flexDirection={'column'} gap={2} mb={10}>
        <Post />
        <Post />
        <Post />
      </Stack>
      <Button size="large" sx={{ my: 5, p: 3, textDecoration: 'underline', cursor: 'pointer' }}>
        Load More
      </Button>
    </>
  );
}

export default Home;

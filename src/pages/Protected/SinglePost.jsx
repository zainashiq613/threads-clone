import { Stack, TextField } from '@mui/material';
import Post from '../../components/home/Post';
import Comments from '../../components/home/post/Comments';
import { useState } from 'react';

function SinglePost() {
  const [comment, setComment] = useState('');
  return (
    <>
      <Stack flexDirection={'column'} my={5} gap={2}>
        <Post />
        <Stack flexDirection={'column'} gap={2} width={'80%'} mx={'auto'}>
          <Comments />
        </Stack>
        <TextField
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          variant="outlined"
          autoFocus
          placeholder="Comment here...."
          id="comment"
          sx={{ width: '50%', mx: 'auto', my: 5, p: 1 }}
        />
      </Stack>
    </>
  );
}

export default SinglePost;

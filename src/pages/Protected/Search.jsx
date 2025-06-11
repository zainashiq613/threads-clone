import React from 'react';
import SearchInput from '../../components/search/SearchInput';
import ProfileBar from '../../components/search/ProfileBar';
import { Stack } from '@mui/material';

function Search() {
  return (
    <>
      <SearchInput />
      <Stack flexDirection={'column'} gap={1} mb={5} mx={'auto'} maxWidth={'750px'} width={'90%'}>
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
      </Stack>
    </>
  );
}

export default Search;

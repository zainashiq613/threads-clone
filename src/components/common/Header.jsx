import { Grid, Stack, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import { TbMenuDeep } from 'react-icons/tb';

function Header() {
  const _700 = useMediaQuery('(min-width:700px)');
  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={'row'}
          height={52}
          justifyContent={'space-around'}
          alignItems={'center'}
          position={'sticky'}
          top={0}
          py={1}
        >
          <img src="/public/Threads-logo-black-bg.webp" alt="logo" width={60} height={48} />
          <Stack justifyContent={'center'} width={550} bgcolor={'aliceblue'} zIndex={2} height={96}>
            <Navbar />
          </Stack>
          <TbMenuDeep size={36} className="image-icon" color="gray" />
        </Stack>
      ) : (
        <>
          <Stack
            position={'fixed'}
            bottom={0}
            justifyContent={'center'}
            width={'100%'}
            height={52}
            p={1}
            bgcolor={'aliceblue'}
            zIndex={2}
          >
            <Navbar />
          </Stack>
          <Grid container height={60} justifyContent={'flex-end'} alignItems={'center'} p={1}>
            <Grid xs={6}>
              <img src="/public/Threads-logo-white-bg.png" alt="logo" width={60} height={35} />
            </Grid>
            <TbMenuDeep size={36} className="image-icon" color="gray" />
          </Grid>
        </>
      )}
    </>
  );
}

export default Header;

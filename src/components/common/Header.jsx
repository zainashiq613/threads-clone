import { Stack } from '@mui/material';
import Navbar from './Navbar';
import { TbMenuDeep } from 'react-icons/tb';

function Header() {
  return (
    <>
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
        <TbMenuDeep size={36} className="image-icon" />
      </Stack>
    </>
  );
}

export default Header;

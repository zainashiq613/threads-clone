import { Stack } from '@mui/material';
import { GoHome } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { LiaEditSolid } from 'react-icons/lia';
import { CiHeart } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Stack
        flexDirection={'row'}
        maxWidth={'100%'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Link to={'/'}>
          <GoHome size={32} />
        </Link>
        <Link to={'/search'}>
          <IoIosSearch size={32} />
        </Link>

        <LiaEditSolid size={32} />
        <CiHeart size={32} />
        <Link to={'/profile/threads/1'}>
          <FaRegCircleUser size={32} />
        </Link>
      </Stack>
    </div>
  );
}

export default Navbar;

import { Stack, useMediaQuery } from '@mui/material';
import { GoHome } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { LiaEditSolid } from 'react-icons/lia';
import { CiHeart } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function Navbar() {
  const _300 = useMediaQuery('(min-width:300px)');
  return (
    <div>
      <Stack
        flexDirection={'row'}
        maxWidth={'100%'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <FiArrowLeft size={_300 ? 32 : 24} className="image-icon" color="black" />
        <Link to={'/'} className="link">
          <GoHome size={_300 ? 32 : 24} />
        </Link>
        <Link to={'/search'} className="link">
          <IoIosSearch size={_300 ? 32 : 24} />
        </Link>

        <LiaEditSolid size={_300 ? 32 : 24} className="image-icon" color="black" />
        <CiHeart size={_300 ? 32 : 24} color="black" />
        <Link to={'/profile/threads/1'} className="link">
          <FaRegCircleUser size={_300 ? 32 : 24} />
        </Link>
      </Stack>
    </div>
  );
}

export default Navbar;

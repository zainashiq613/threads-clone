import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

function MainMenu() {
  const handleClose = () => {};
  const handleToggleTheme = () => {};
  const handleLogOut = () => {};
  return (
    <>
      <Menu
        anchorEl={''}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
        <Link to={'/profile/threads/2'} className="link">
          <MenuItem>My Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
    </>
  );
}

export default MainMenu;

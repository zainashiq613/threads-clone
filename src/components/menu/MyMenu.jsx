import { Menu, MenuItem } from '@mui/material';

function MyMenu() {
  const handleClose = () => {};
  const handleDeletePost = () => {};
  return (
    <>
      <Menu
        anchorEl={''}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
      </Menu>
    </>
  );
}

export default MyMenu;

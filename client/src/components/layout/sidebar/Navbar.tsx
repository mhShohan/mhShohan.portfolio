import { logout } from '@/services/actions/logout';
import { logoutUser } from '@/store/authSlice';
import { useAppDispatch } from '@/store/hooks';
import storage from '@/utils/storage';
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

interface NavbarProps {
  handleDrawerToggle: MouseEventHandler<HTMLButtonElement>;
}

const Navbar = ({ handleDrawerToggle }: NavbarProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    storage.removeToken();
    dispatch(logoutUser());
    router.push('/');
  };

  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'secondary.main' }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon sx={{ color: '#fff' }} />
        </IconButton>

        {/* Top bar content */}
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
          <Stack
            direction='row'
            component={Link}
            alignItems='center'
            href='/'
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Typography variant='h5' noWrap fontWeight='800' color='#fff'>
              mhShohan
            </Typography>
          </Stack>
          <Button
            onClick={handleLogout}
            color='info'
            sx={{ padding: '.4rem 1.5rem', display: 'flex', gap: '4px', alignItems: 'center' }}
          >
            <Box component='span' sx={{ display: { xs: 'none', md: 'flex' } }}>
              Logout
            </Box>
            <PowerSettingsNewIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

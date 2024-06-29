'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// mui
import { IconButton, Stack, useTheme } from '@mui/material';
import styled from '@mui/material/styles/styled';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// project imports
import { navbarData } from '@/data';
import { Dispatch, SetStateAction, useState } from 'react';

const Navbar = () => {
  const theme = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Stack sx={{ p: 1 }}>
        <Stack display={{ xs: 'none', md: 'flex' }}>
          <List>
            {navbarData.map((link) => (
              <NavLinks key={link.id} link={link} handleClick={() => {}} />
            ))}
          </List>
        </Stack>
        <Stack display={{ xs: 'flex', md: 'none' }} alignItems='flex-end'>
          <IconButton onClick={() => setIsMobileMenuOpen(true)}>
            <MenuIcon
              sx={{
                color: '#fff',
                fontSize: '2.2rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      {isMobileMenuOpen && (
        <Stack
          sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#0F151C',
            zIndex: 10,
          }}
        >
          <IconButton onClick={() => setIsMobileMenuOpen(false)}>
            <CloseIcon
              sx={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                color: '#fff',
                fontSize: '2.2rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main },
              }}
            />
          </IconButton>
          <Stack alignItems='center'>
            {navbarData.map((link) => (
              <NavLinks key={link.id} link={link} handleClick={setIsMobileMenuOpen} />
            ))}
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Navbar;

const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    margin: '0 1rem',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 500,
      transition: 'color 0.3s ease',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
}));

// NavLinks Component
const NavLinks = ({
  link,
  handleClick,
}: {
  handleClick: Dispatch<SetStateAction<boolean>>;
  link: { name: string; path: string };
}) => {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <li style={{ listStyle: 'none' }}>
      <Link
        href={link.path}
        style={{
          color: pathname === link.path ? theme.palette.primary.main : 'white',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 500,
          transition: 'color 0.3s ease',
        }}
        onClick={() => handleClick(false)}
      >
        {link.name}
      </Link>
    </li>
  );
};

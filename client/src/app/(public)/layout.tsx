import Navbar from '@/components/layout/Navbar';
import { Stack } from '@mui/material';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(/assets/bg-1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      {children}
    </Stack>
  );
};

export default HomeLayout;

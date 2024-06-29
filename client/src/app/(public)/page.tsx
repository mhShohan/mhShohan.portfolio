'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

// mui
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Container, Grid, Stack, Typography, useTheme } from '@mui/material';

// assets
import img from '@/assets/banner.png';

const Homepage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth='lg'>
      <Stack>
        <Grid container my={5}>
          <Grid
            item
            xs={12}
            md={8}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems={{ xs: 'center', sm: 'center', md: 'flex-start' }}
            gap={1}
          >
            <Typography variant='h6' lineHeight={1} textAlign={{ xs: 'center', md: 'left' }}>
              Hello, This is
            </Typography>
            <Typography
              variant='h2'
              fontWeight='700'
              fontSize={{ xs: '2rem', sm: '2.8rem', md: '3.5rem' }}
              textTransform='uppercase'
              textAlign={{ xs: 'center', md: 'left' }}
              lineHeight='1'
            >
              Mehdi Hasan Shohan
            </Typography>
            <Typography
              variant='h4'
              textAlign={{ xs: 'center', md: 'left' }}
              fontSize={{ xs: '1.2rem', sm: '1.6rem', md: '2rem' }}
            >
              Full Stack Developer (MERN/PERN Stack)
            </Typography>
            <Typography variant='body1' textAlign={{ xs: 'center', md: 'left' }}>
              An enthusiast student who loves to learn and explore the world of web development.
            </Typography>
            <Stack direction='row' gap={1}>
              <Button variant='outlined' color='primary'>
                View Resume
              </Button>
              <Button variant='outlined' color='primary'>
                Download Resume
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} display='flex' justifyContent='center' alignItems='center'>
            <Image src={img} alt='banner' width={400} height={400} />
          </Grid>
        </Grid>
        <Stack
          sx={{
            position: 'fixed',
            left: '1rem',
            bottom: '1rem',
          }}
          gap={1}
        >
          <SocialLinks link='https://www.linkedin.com/in/mehdi-hasan-shohan'>
            <LinkedInIcon
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '2rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.2)' },
              }}
            />
          </SocialLinks>
          <SocialLinks link='https://github.com/mhShohan'>
            <GitHubIcon
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1.8rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.2)' },
              }}
            />
          </SocialLinks>
          <SocialLinks link='https://x.com/mhShohan25'>
            <TwitterIcon
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1.8rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.2)' },
              }}
            />
          </SocialLinks>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Homepage;

const SocialLinks = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <Link target='_blank' href={link}>
      {children}
    </Link>
  );
};

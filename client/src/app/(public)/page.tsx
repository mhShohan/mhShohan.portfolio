'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

// mui
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Container, Grid, Stack, Typography, useTheme } from '@mui/material';

// assets
import img from '@/assets/profile-pic.png';
import { useGetProfileQuery } from '@/store/api/profile.api';
import Loader from '@/components/shared/Loader';
import { IProfile } from '@/types';

const Homepage = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileQuery(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  if (isProfileLoading) return <Loader />;

  const profile: IProfile = data?.data;

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
              fontWeight='800'
              fontSize={{ xs: '2rem', sm: '2.8rem', md: '3rem' }}
              textTransform='uppercase'
              textAlign={{ xs: 'center', md: 'left' }}
              lineHeight='0.8'
            >
              {profile?.name}
            </Typography>
            <Typography
              variant='h4'
              textAlign={{ xs: 'center', md: 'left' }}
              fontSize={{ xs: '1.2rem', sm: '1.6rem', md: '2.2rem' }}
              fontWeight={700}
            >
              {profile.title}
            </Typography>
            <Typography variant='body1' textAlign={{ xs: 'center', md: 'left' }}>
              {profile.bio}
            </Typography>
            <Stack direction='row' gap={1} mt={1}>
              <Button
                variant='contained'
                target='_blank'
                color='primary'
                LinkComponent={Link}
                href={profile.resume}
              >
                View Resume
              </Button>
              <Button variant='outlined' color='primary' LinkComponent={Link} href='/about'>
                View Details
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
          <SocialLinks link={profile.socialLinks?.linkedin as string}>
            <LinkedInIcon
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '2rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.2)' },
              }}
            />
          </SocialLinks>
          <SocialLinks link={profile.socialLinks?.github as string}>
            <GitHubIcon
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1.8rem',
                transition: 'all ease 200ms',
                '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.2)' },
              }}
            />
          </SocialLinks>
          <SocialLinks link={profile.socialLinks?.twitter as string}>
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

'use client';

import Loader from '@/components/shared/Loader';
import { useGetProfileQuery } from '@/store/api/profile.api';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import profileImage from '@/assets/profile.png';
import CircularLoader from '@/components/UI/CircularLoader';
import { IExperience, ITechnology } from '@/types';
import Link from 'next/link';
import dateFormatter from '@/utils/dateFormatter';

import CircleIcon from '@mui/icons-material/Circle';
import { useGetAllExperienceQuery } from '@/store/api/experience.api';
import { Heading } from '@/components/extended';
import Technology from '@/components/UI/Technology';
import Education from '@/components/UI/Education';
import Skills from '@/components/UI/Skills';
import PersonalInterest from '@/components/UI/PersonalInterest';
import SocialLinks from '@/components/UI/SocialLinks';

const AboutPage = () => {
  const { data, isLoading } = useGetProfileQuery(undefined);
  const { data: experiences, isLoading: isExpLoading } = useGetAllExperienceQuery(undefined);

  if (isLoading || isExpLoading) return <Loader />;

  return (
    <Container maxWidth='lg'>
      <Grid container my={{ xs: 0, md: 5 }} direction={{ xs: 'column-reverse', md: 'row' }}>
        <Grid item xs={12} md={7} display='flex' alignItems='center'>
          <Stack gap={1}>
            <Typography variant='h4' textAlign='justify' fontWeight='700'>
              Hi, {`I'm ${data?.data.name}`}
            </Typography>
            {data?.data.description.split('|BREAK| ').map((desc: string, index: number) => (
              <Typography
                key={index}
                variant='body1'
                fontFamily='Poppins'
                fontSize='1rem'
                textAlign='justify'
              >
                {desc}
              </Typography>
            ))}
            <Typography variant='body2' fontFamily='Poppins' fontStyle='italic'>
              <strong>Interested In:</strong> Software Engineering, System Design..!!!
            </Typography>
            <SocialLinks socialLinks={data?.data.socialLinks} />
            <Stack direction='row' gap={1}>
              <Button
                variant='contained'
                color='primary'
                LinkComponent={Link}
                target='_blank'
                href={data?.data.resume}
              >
                View Resume
              </Button>
              <Button variant='outlined' color='primary' LinkComponent={Link} href='/projects'>
                View Projects
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          display='flex'
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          alignItems='center'
        >
          <Box
            sx={{
              maxWidth: 400,
              maxHeight: 400,
              aspectRatio: '1/1',
            }}
          >
            <Image
              src={profileImage}
              alt='Profile Image'
              width={500}
              height={500}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>

      <Stack alignItems='center' mb={10}>
        <Heading>Experiences</Heading>
        {isExpLoading ? (
          <CircularLoader />
        ) : (
          <Grid container spacing={2} mt={2}>
            {experiences?.data?.map((exp: IExperience) => (
              <Grid item key={exp._id} xs={12}>
                <Stack p={4} boxShadow={24} gap={0.5} bgcolor='#254B62' borderRadius={4}>
                  <Typography variant='h5' lineHeight={1} fontWeight='700'>
                    {exp.title} at{' '}
                    <Link href={exp.link} target='_blank' style={{ color: 'lightblue' }}>
                      {exp.organization}
                    </Link>
                  </Typography>
                  <Typography variant='h6' lineHeight={1} fontWeight='500'>
                    Responsibilities:
                  </Typography>
                  <Divider />
                  {exp.responsibilities.map((res) => (
                    <Typography variant='body1' pl={1} key={res} lineHeight={1}>
                      <CircleIcon sx={{ fontSize: '10px' }} /> {res}
                    </Typography>
                  ))}
                  <Typography variant='body1' mt={1} lineHeight={1} fontSize='700'>
                    {dateFormatter(exp.startDate, exp.endDate)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>

      <Container maxWidth='md'>
        <Stack alignItems='center' mb={10}>
          <Heading>Technology Stacks</Heading>
          <Stack width='100%' gap={1} mt={2}>
            {/* {Object.keys(data?.data?.techStacks).map((key) => (
              <Stack key={key} direction='row' alignItems='center' justifyContent='flex-start'>
                <Typography flex={1} variant='h5' fontWeight='700' textTransform='uppercase'>
                  {key}
                </Typography>
                <Stack flex={4} direction='row' justifyContent='flex-start' flexWrap='wrap'>
                  {data?.data?.techStacks[key].map((tech: ITechnology) => (
                    <Technology key={tech._id} technology={tech} theme='dark' />
                  ))}
                </Stack>
              </Stack>
            ))} */}
            {/*  */}
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
            >
              <Typography flex={1} variant='h5' fontWeight='700' textTransform='uppercase'>
                languages
              </Typography>
              <Stack
                flex={4}
                direction='row'
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexWrap='wrap'
              >
                {data?.data?.techStacks.languages.map((tech: ITechnology) => (
                  <Technology key={tech._id} technology={tech} theme='dark' />
                ))}
              </Stack>
            </Stack>
            {/*  */}
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
            >
              <Typography flex={1} variant='h5' fontWeight='700' textTransform='uppercase'>
                databases
              </Typography>
              <Stack
                flex={4}
                direction='row'
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexWrap='wrap'
              >
                {data?.data?.techStacks.databases.map((tech: ITechnology) => (
                  <Technology key={tech._id} technology={tech} theme='dark' />
                ))}
              </Stack>
            </Stack>
            {/*  */}
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
            >
              <Typography flex={1} variant='h5' fontWeight='700' textTransform='uppercase'>
                backend
              </Typography>
              <Stack
                flex={4}
                direction='row'
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexWrap='wrap'
              >
                {data?.data?.techStacks.backend.map((tech: ITechnology) => (
                  <Technology key={tech._id} technology={tech} theme='dark' />
                ))}
              </Stack>
            </Stack>
            {/*  */}
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
            >
              <Typography flex={1} variant='h5' fontWeight='700' textTransform='uppercase'>
                frontend
              </Typography>
              <Stack
                flex={4}
                direction='row'
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexWrap='wrap'
              >
                {data?.data?.techStacks.frontend.map((tech: ITechnology) => (
                  <Technology key={tech._id} technology={tech} theme='dark' />
                ))}
              </Stack>
            </Stack>
            {/*  */}
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='flex-start'
            >
              <Typography flex={1} variant='h5' fontWeight='700' textTransform='uppercase'>
                tools
              </Typography>
              <Stack
                flex={4}
                direction='row'
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                flexWrap='wrap'
              >
                {data?.data?.techStacks.tools.map((tech: ITechnology) => (
                  <Technology key={tech._id} technology={tech} theme='dark' />
                ))}
              </Stack>
            </Stack>
            {/*  */}
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth='lg'>
        <Stack alignItems='center' mb={10}>
          <Heading>Education</Heading>
          <Education />
        </Stack>
      </Container>

      <Skills />
      {data?.data?.viewPersonalInterest && <PersonalInterest />}
    </Container>
  );
};

export default AboutPage;

'use client';

import Loader from '@/components/shared/Loader';
import { useGetAllProjectsQuery } from '@/store/api/project.api';
import { IProject } from '@/types';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Technology from '@/components/UI/Technology';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIcon from '@mui/icons-material/Link';

const ProjectsPage = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);

  if (isLoading) return <Loader />;

  console.log(data?.data);

  return (
    <Container maxWidth='lg'>
      <Stack spacing={2} my={3}>
        {data?.data?.map((project: IProject) => (
          <Stack key={project._id} boxShadow={24} p={4} bgcolor='#254B62' borderRadius={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Image
                  src={project.cover}
                  alt={project.name}
                  width={500}
                  height={300}
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '1rem',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack justifyContent='space-between' height='100%'>
                  <Box>
                    <Typography variant='h5' lineHeight={1}>
                      {project.name}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </Box>
                  {/* <Box>
                    <Typography fontWeight='700' mt={1}>
                      Features:{' '}
                    </Typography>
                    {project.features.map((feature) => (
                      <Typography key={feature} pl={1}>
                        <CircleIcon sx={{ fontSize: '10px', mx: '2px' }} />
                        {feature}
                      </Typography>
                    ))}
                  </Box> */}
                  <Box>
                    <Typography fontWeight='700' mt={1}>
                      Technology:{' '}
                    </Typography>
                    <Box display='flex' flexWrap='wrap'>
                      {project.technologies.map((tech) => (
                        <Technology key={tech._id} technology={tech} theme='dark' />
                      ))}
                    </Box>
                  </Box>
                  <Stack my={2} spacing={1} direction='row'>
                    <Button
                      LinkComponent={Link}
                      href={project.liveSiteLink}
                      startIcon={<LinkIcon />}
                      variant='outlined'
                      color='primary'
                    >
                      Live Site
                    </Button>
                    {Object.entries(project.repositoryLink).map(([key, value]) => (
                      <>
                        {value && (
                          <Button
                            LinkComponent={Link}
                            href={value}
                            startIcon={<GitHubIcon />}
                            variant='outlined'
                            color='primary'
                          >
                            {key.split('_').join(' ').toUpperCase()}
                          </Button>
                        )}
                      </>
                    ))}
                  </Stack>
                  <Button
                    LinkComponent={Link}
                    href={`/projects/${project._id}`}
                    variant='contained'
                    color='primary'
                    startIcon={<VisibilityIcon />}
                  >
                    View Project Details
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default ProjectsPage;

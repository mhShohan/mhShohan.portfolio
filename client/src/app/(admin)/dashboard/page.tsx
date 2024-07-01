'use client';

import CircularLoader from '@/components/UI/CircularLoader';
import { useProfileAnalysisQuery } from '@/store/api/profile.api';
import { Box, Grid, Stack, Typography } from '@mui/material';

const DashboardPage = () => {
  const { data, isLoading } = useProfileAnalysisQuery(undefined);

  if (isLoading)
    return (
      <Stack alignItems='center'>
        <CircularLoader />
      </Stack>
    );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          width='100%'
          minHeight='200px'
          boxShadow={24}
          display={'flex'}
          flexDirection='column'
          justifyContent='center'
          borderRadius={3}
          alignItems='center'
        >
          <Typography variant='h4'>Total Projects</Typography>
          <Typography variant='h2'>{data?.data.projectCount}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          width='100%'
          minHeight='200px'
          boxShadow={24}
          display={'flex'}
          flexDirection='column'
          justifyContent='center'
          borderRadius={3}
          alignItems='center'
        >
          <Typography variant='h4'>Total Blogs</Typography>
          <Typography variant='h2'>{data?.data.blogCount}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;

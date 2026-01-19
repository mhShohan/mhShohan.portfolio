'use client';

import JobDrawer from '@/components/JobDrawer';
import Loader from '@/components/shared/Loader';
import { useGetAllJobQuery } from '@/store/api/job.api';
import { Button, Stack } from '@mui/material';

const JobsPage = () => {
  const { data, isLoading } = useGetAllJobQuery(undefined);

  if (isLoading) return <Loader />;

  console.log(data);

  return (
    <div>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' mb={2}>
        <JobDrawer />
      </Stack>
    </div>
  );
};

export default JobsPage;

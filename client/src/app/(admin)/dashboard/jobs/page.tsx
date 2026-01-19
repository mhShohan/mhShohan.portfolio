'use client';

import JobDrawer from '@/components/JobDrawer';
import JobsTable from '@/components/JobTable';
import Loader from '@/components/shared/Loader';
import { useGetAllJobQuery } from '@/store/api/job.api';
import { Button, Stack } from '@mui/material';

const JobsPage = () => {
  const { data, isLoading } = useGetAllJobQuery(undefined);

  return (
    <div>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' mb={2}>
        <JobDrawer />
      </Stack>
      {isLoading ? <Loader /> : <JobsTable data={data?.data || []} />}
    </div>
  );
};

export default JobsPage;

'use client';

import JobDrawer from '@/components/JobDrawer';
import JobsTable from '@/components/JobTable';
import Loader from '@/components/shared/Loader';
import { useGetAllJobQuery } from '@/store/api/job.api';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

const JobsPage = () => {
  const [query, setQuery] = useState({ page: 1, limit: 10, searchTerm: '' });
  const { data, isLoading } = useGetAllJobQuery(query);

  return (
    <div>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' mb={2}>
        <JobDrawer />
      </Stack>
      {isLoading ? <Loader /> : <JobsTable data={data?.data || []} setQuery={setQuery} />}
    </div>
  );
};

export default JobsPage;

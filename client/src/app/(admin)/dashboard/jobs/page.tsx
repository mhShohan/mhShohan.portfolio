import JobDrawer from '@/components/JobDrawer';
import { Button, Stack } from '@mui/material';

const JobsPage = () => {
  return (
    <div>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' mb={2}>
        <JobDrawer />
      </Stack>
    </div>
  );
};

export default JobsPage;

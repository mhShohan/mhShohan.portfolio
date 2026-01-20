import AddPublicJobPage from '@/components/add-job-page';
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense>
      <AddPublicJobPage />
    </Suspense>
  );
};

export default page;

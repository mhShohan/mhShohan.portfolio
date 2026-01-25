'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress, Container, Stack } from '@mui/material';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { useCreateJobMutation } from '@/store/api/job.api';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import CustomSelectField from '@/components/shared/form/CustomSelect';
import { useSearchParams } from 'next/navigation';
import { config } from '@/utils/config';

const RichText = dynamic(() => import('@/components/UI/RechTextEditor'), {
  ssr: false,
});

const schema = z.object({
  title: z
    .string({ required_error: 'Blog title is required' })
    .min(1, { message: 'Blog title is required' }),
  company: z
    .string({ required_error: 'Company name is required' })
    .min(1, { message: 'Company name is required' }),
  status: z
    .string({ required_error: 'Job status is required' })
    .min(1, { message: 'Job status is required' }),
});

const AddPublicJobPage = () => {
  const searchParams = useSearchParams();

  const [value, setValue] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [createNewJob] = useCreateJobMutation();

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    if (!value) {
      toast.error('Job description is missing!');
      setIsLoading(false);
      return;
    }

    const id = searchParams.get('id') as string;

    if (id !== config.addJobUser) {
      toast.error('Invalid job submission link!');

      setIsLoading(false);
      return;
    }

    try {
      const res = await createNewJob({
        title: data.title,
        company: data.company,
        status: data.status,
        description: value,
      }).unwrap();

      if (res.success) {
        toast.success('Job created successfully');
        setValue('');
        return true;
      } else {
        toast.error('Failed to create job');
      }
    } catch (error) {
      toast.error('Failed to create job');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }} maxWidth='md'>
      <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 2 }}>
        <CustomForm
          onSubmit={handleSubmit}
          defaultValues={{ title: '', company: '', status: '', description: '' }}
          resolver={zodResolver(schema)}
        >
          <Stack>
            <Stack my={1}>
              <CustomInput label='Job Title' name='title' />
            </Stack>
            <Stack my={1}>
              <CustomInput label='Company Name' name='company' />
            </Stack>
            <Stack my={1}>
              <CustomSelectField
                label='Job Collection status'
                name='status'
                placeholder='Job Collection status'
                items={[
                  { name: 'Found', value: 'Found' },
                  { name: 'Applied', value: 'Applied' },
                  { name: 'Interviewing', value: 'Interviewing' },
                  { name: 'Offered', value: 'Offered' },
                  { name: 'Rejected', value: 'Rejected' },
                  { name: 'Not Interested', value: 'Not Interested' },
                ]}
              />
            </Stack>
            <Stack mb={8}>
              <RichText value={value} setValue={setValue} />
            </Stack>
            <Stack gap={2}>
              <Button type='submit' sx={{ p: 1.1 }} fullWidth variant='contained' color='secondary'>
                {isLoading ? (
                  <CircularProgress sx={{ width: '25px !important', height: '25px !important' }} />
                ) : (
                  'Add Job'
                )}
              </Button>
            </Stack>
          </Stack>
        </CustomForm>
      </Box>
    </Container>
  );
};

export default AddPublicJobPage;

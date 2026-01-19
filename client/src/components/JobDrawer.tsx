'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { toast } from 'sonner';
import CustomForm from './shared/form/CustomForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress, Stack } from '@mui/material';
import CustomInput from './shared/form/CustomInput';
import { z } from 'zod';
import CustomSelectField from './shared/form/CustomSelect';
import dynamic from 'next/dynamic';
import { useCreateJobMutation } from '@/store/api/job.api';

const RichText = dynamic(() => import('@/components/UI/RechTextEditor'), {
  ssr: false,
});

export default function JobDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 800 }} role='presentation' p={2} mt={8}>
      <AddJobForm />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} variant='contained' color='secondary'>
        Add Job
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </div>
  );
}

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

const AddJobForm = () => {
  const [value, setValue] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [createNewJob] = useCreateJobMutation();

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    console.log(data, 'data');

    if (!value) {
      toast.error('Job description is missing!');
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
  );
};

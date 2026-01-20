'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircularProgress, IconButton, Stack } from '@mui/material';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { useCreateJobMutation, useUpdateJobMutation } from '@/store/api/job.api';
import CustomForm from '../shared/form/CustomForm';
import CustomInput from '../shared/form/CustomInput';
import CustomSelectField from '../shared/form/CustomSelect';
import { FieldValues } from 'react-hook-form';
import EditIcon from '@mui/icons-material/Edit';

const RichText = dynamic(() => import('@/components/UI/RechTextEditor'), {
  ssr: false,
});

interface Props {
  data: {
    title: string;
    company: string;
    status: string;
    description: string;
  };
}

export default function EditJobDrawer({ data }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton size='small' color='success' onClick={() => setOpen(true)}>
        <EditIcon fontSize='small' />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
        <Box sx={{ width: 800 }} role='presentation' p={2} mt={8}>
          <EditJobForm data={data} setOpen={setOpen} />
        </Box>
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

interface EditJobForm {
  data: {
    title: string;
    company: string;
    status: string;
    description: string;
  };
  setOpen: (open: boolean) => void;
}

const EditJobForm = ({ data, setOpen }: EditJobForm) => {
  const [value, setValue] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [updateJob] = useUpdateJobMutation();

  const jobId = data && (data as any)._id;
  const handleSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    if (!value) {
      toast.error('Job description is missing!');
      setIsLoading(false);
      return;
    }

    try {
      const res = await updateJob({
        id: jobId,
        title: data.title,
        company: data.company,
        status: data.status,
        description: value,
      }).unwrap();

      if (res.success) {
        toast.success('Job updated successfully');
        setValue('');
        return true;
      } else {
        toast.error('Failed to update job');
      }
    } catch (error) {
      toast.error('Failed to update job');
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  React.useEffect(() => {
    setValue(data?.description || '');
  }, [data]);

  return (
    <CustomForm
      onSubmit={handleSubmit}
      defaultValues={{
        title: data.title,
        company: data.company,
        status: data.status,
        description: data.description,
      }}
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
              'Update Job'
            )}
          </Button>
        </Stack>
      </Stack>
    </CustomForm>
  );
};

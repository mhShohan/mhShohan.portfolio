'use client';

import CircularLoader from '@/components/UI/CircularLoader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import CustomDatePicker from '@/components/shared/form/CutomDatePicker';
import { useAddEducationMutation, useGetAllEducationQuery } from '@/store/api/education.api';
import { IEducation } from '@/types';
import dateFormatter from '@/utils/dateFormatter';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const defaultValues = {
  institute: '',
  certificate: '',
  startDate: '',
  endDate: '',
};

const schema = z.object({
  institute: z
    .string({ required_error: 'Institute is required' })
    .min(1, { message: 'Institute is required' }),
  certificate: z
    .string({ required_error: 'Certificate is required' })
    .min(1, { message: 'Certificate is required' }),
  startDate: z.date({ message: 'Start Date is required' }),
  endDate: z.date({ message: 'End Date is required' }),
});

const EducationsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addEducation] = useAddEducationMutation();
  const { data, isLoading: isEduLoading } = useGetAllEducationQuery(undefined);

  const handleSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await addEducation(data).unwrap();

      if (res.success) {
        toast.success('Education added successfully');
        return true;
      } else {
        toast.error('Error adding education');
      }
    } catch (error) {
      toast.error('Error adding education');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      <Container maxWidth='xs'>
        <Stack boxShadow={24} p={2} borderRadius={2}>
          <CustomForm
            onSubmit={handleSubmit}
            resolver={zodResolver(schema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <CustomInput label='Institute Name' name='institute' />
              </Grid>
              <Grid item xs={12}>
                <CustomInput label='Certificate' name='certificate' />
              </Grid>
              <Grid item xs={12}>
                <CustomDatePicker label='Start Date' name='startDate' />
              </Grid>
              <Grid item xs={12}>
                <CustomDatePicker label='End Date' name='endDate' />
              </Grid>
            </Grid>
            <Button
              type='submit'
              sx={{ p: 1.1, mt: 1 }}
              fullWidth
              variant='contained'
              color='secondary'
            >
              {isLoading ? (
                <CircularProgress sx={{ width: '25px !important', height: '25px !important' }} />
              ) : (
                'Add'
              )}
            </Button>
          </CustomForm>
        </Stack>
      </Container>
      <Stack my={5} alignItems='center'>
        {isEduLoading ? (
          <CircularLoader />
        ) : (
          <Grid container spacing={2}>
            {data?.data?.map((edu: IEducation) => (
              <Grid item key={edu._id} xs={12} md={6}>
                <Stack p={2} boxShadow={24} gap={0.5} borderRadius={4} height='100%'>
                  <Typography variant='h5' lineHeight={1} fontWeight='700'>
                    {edu.certificate}
                  </Typography>
                  <Typography variant='h6' lineHeight={1} fontWeight='500'>
                    {edu.institute}
                  </Typography>
                  <Typography variant='body1' lineHeight={1}>
                    {dateFormatter(edu.startDate, edu.endDate)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </Stack>
  );
};

export default EducationsPage;

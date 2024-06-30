'use client';

import CircularLoader from '@/components/UI/CircularLoader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import CustomDatePicker from '@/components/shared/form/CutomDatePicker';
import { useAddExperienceMutation, useGetAllExperienceQuery } from '@/store/api/experience.api';
import { IExperience } from '@/types';
import dateFormatter from '@/utils/dateFormatter';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';

const defaultValues = {
  title: '',
  organization: '',
  link: '',
  startDate: '',
  endDate: '',
};

const schema = z.object({
  title: z
    .string({ required_error: 'Job Title is required' })
    .min(1, { message: 'Job Title is required' }),
  organization: z
    .string({ required_error: 'Organization name is required' })
    .min(1, { message: 'Organization name is required' }),
  link: z
    .string({ required_error: 'Organization site link is required' })
    .min(1, { message: 'Organization site link is required' }),
  startDate: z.date({ message: 'Start Date is required' }),
  endDate: z.date({ message: 'End Date is required' }),
});

const ExperiencesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resCount, setResCount] = useState(1);
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [addExperience] = useAddExperienceMutation();
  const { data, isLoading: isEduLoading } = useGetAllExperienceQuery(undefined);

  const handleSubmit = async (data: any) => {
    if (responsibilities.length <= 0) {
      toast.error('Must add job responsibilities');
      return;
    }

    try {
      setIsLoading(true);
      const res = await addExperience({ ...data, responsibilities }).unwrap();

      if (responsibilities.length <= 0) {
        toast.error('Must add job responsibilities');
      }

      if (res.success) {
        toast.success('Experience added successfully');
        return true;
      } else {
        toast.error('Error adding Experience');
      }
    } catch (error) {
      toast.error('Error adding Experience');
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
                <CustomInput label='Job Title' name='title' />
              </Grid>
              <Grid item xs={12}>
                <CustomInput label='Organization Name' name='organization' />
              </Grid>
              <Grid item xs={12}>
                <CustomInput label='Organization Site Link' name='link' />
              </Grid>
              <Grid item xs={12}>
                <CustomDatePicker label='Start Date' name='startDate' />
              </Grid>
              <Grid item xs={12}>
                <CustomDatePicker label='End Date' name='endDate' />
              </Grid>
              {Array.from({ length: resCount }, (_, index) => index + 1).map((i: number) => (
                <>
                  {i < resCount ? (
                    <Grid item xs={12} key={i}>
                      <TextField
                        label={'Responsibilities'}
                        variant='outlined'
                        color='secondary'
                        size='small'
                        fullWidth
                        placeholder='Add Job Responsibility'
                        onChange={(e) =>
                          setResponsibilities((prev) => {
                            prev[i - 1] = e.target.value;
                            return prev;
                          })
                        }
                      />
                    </Grid>
                  ) : (
                    <Grid item xs={12} key={i}>
                      <Grid container spacing={2} key={i}>
                        <Grid item xs={10} key={i}>
                          <TextField
                            label={'Responsibilities'}
                            variant='outlined'
                            color='secondary'
                            size='small'
                            fullWidth
                            placeholder='Add Job Responsibility'
                            onChange={(e) =>
                              setResponsibilities((prev) => {
                                prev[i - 1] = e.target.value;
                                return prev;
                              })
                            }
                          />
                        </Grid>
                        <Grid item xs={2} key={i}>
                          <IconButton
                            onClick={() => setResCount((prev) => prev + 1)}
                            color='secondary'
                            sx={{
                              bgcolor: 'secondary.main',
                              color: 'white',
                              '&:hover': { bgcolor: 'secondary.main' },
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </>
              ))}
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
            {data?.data?.map((exp: IExperience) => (
              <Grid item key={exp._id} xs={12}>
                <Stack p={2} boxShadow={24} gap={0.5} borderRadius={4}>
                  <Typography variant='h5' lineHeight={1} fontWeight='700'>
                    {exp.title} at{' '}
                    <Link href={exp.link} target='_blank'>
                      {exp.organization}
                    </Link>
                  </Typography>
                  <Typography variant='h6' lineHeight={1} fontWeight='500'>
                    Responsibilities:
                  </Typography>
                  <Divider />
                  {exp.responsibilities.map((res) => (
                    <Typography variant='body1' pl={1} key={res} lineHeight={1}>
                      <CircleIcon sx={{ fontSize: '10px' }} /> {res}
                    </Typography>
                  ))}
                  <Typography variant='body1' mt={1} lineHeight={1} fontSize='700'>
                    {dateFormatter(exp.startDate, exp.endDate)}
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

export default ExperiencesPage;

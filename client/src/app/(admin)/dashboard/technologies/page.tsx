'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

// mui
import { Box, Button, CircularProgress, Container, Grid, Stack } from '@mui/material';

// project imports
import CustomFileUploader from '@/components/shared/form/CustomFileUploader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import uploadFileToCloudinary from '@/lib/uploadFileToCloudinary';
import { useAddTechnologiesMutation, useGetTechnologiesQuery } from '@/store/api/technology.api';
import { ITechnology } from '@/types';
import Technology from '@/components/UI/Technology';

const schema = z.object({
  name: z
    .string({ required_error: 'Technology Name is required!' })
    .min(1, { message: 'Must Provide Technology Name' }),
});

const TechnologiesPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { data, isLoading: isTechLoading } = useGetTechnologiesQuery(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [addTechnology] = useAddTechnologiesMutation();

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    if (!file) {
      toast.error('Please upload a file');
      setIsLoading(false);
      return;
    }

    try {
      const imageLink = await uploadFileToCloudinary(file);

      if (!imageLink) {
        toast.error('Failed to upload image');
        setIsLoading(false);
        return;
      }

      const res = await addTechnology({ name: data.name, image: imageLink }).unwrap();

      if (res.success) {
        toast.success('Technology added successfully');
        setFile(null);
        return true;
      } else {
        toast.error('Failed to add technology');
      }
    } catch (error) {
      toast.error('Failed to add technology');
    } finally {
      setIsLoading(false);
      setFile(null);
    }
  };

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  console.log({ data, isTechLoading });

  return (
    <Stack>
      <Container maxWidth='md'>
        <Stack boxShadow={24} p={2} borderRadius={2}>
          <CustomForm
            onSubmit={handleSubmit}
            resolver={zodResolver(schema)}
            defaultValues={{ name: '' }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} md={8}>
                <CustomInput label='Technology Name' name='name' />
              </Grid>

              <Grid item xs={12} md={1}>
                <CustomFileUploader
                  label='Upload Icon of Technology'
                  name='file'
                  onFileUpload={handleFileUpload}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1.1 }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  type='submit'
                  sx={{ p: 1.1 }}
                  fullWidth
                  variant='contained'
                  color='secondary'
                >
                  {isLoading ? (
                    <CircularProgress
                      sx={{ width: '25px !important', height: '25px !important' }}
                    />
                  ) : (
                    'Add'
                  )}
                </Button>
              </Grid>
            </Grid>
          </CustomForm>
        </Stack>
      </Container>
      <Stack my={6}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {isTechLoading ? (
            <CircularProgress
              color='secondary'
              sx={{
                width: '100px !important',
                height: '100px !important',
              }}
            />
          ) : (
            <>
              {data?.data?.map((tech: ITechnology) => (
                <Technology key={tech._id} technology={tech} theme='light' />
              ))}
            </>
          )}
        </Box>
      </Stack>
    </Stack>
  );
};

export default TechnologiesPage;

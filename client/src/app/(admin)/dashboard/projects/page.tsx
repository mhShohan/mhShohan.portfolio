'use client';

import CircularLoader from '@/components/UI/CircularLoader';
import CustomFileUploader from '@/components/shared/form/CustomFileUploader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import CustomSelectField from '@/components/shared/form/CustomSelect';
import MultiSelect from '@/components/shared/form/MultiSelect';
import { useAddExperienceMutation } from '@/store/api/experience.api';
import { useAddProjectMutation, useGetAllProjectsQuery } from '@/store/api/project.api';
import { IExperience, IProject, IProjectCategory, ITechnology } from '@/types';
import dateFormatter from '@/utils/dateFormatter';
import { zodResolver } from '@hookform/resolvers/zod';
import CircleIcon from '@mui/icons-material/Circle';
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
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import AddIcon from '@mui/icons-material/Add';
import uploadFileToCloudinary from '@/lib/uploadFileToCloudinary';
import Image from 'next/image';

const defaultValues = {
  name: '',
  description: '',
  category: '',
  repositoryLink: {
    source_code: '',
    client_side_code: '',
    server_side_code: '',
  },
  liveSiteLink: '',
};

const schema = z.object({
  name: z
    .string({ required_error: 'Project name is required' })
    .min(1, { message: 'Project name is required' }),
  description: z
    .string({ required_error: 'Project description is required' })
    .min(1, { message: 'Project description is required' }),
  category: z
    .string({ required_error: 'Project category is required' })
    .min(1, { message: 'Project category is required' }),
  repositoryLink: z.object({
    source_code: z.string().optional(),
    client_side_code: z.string().optional(),
    server_side_code: z.string().optional(),
  }),
  liveSiteLink: z
    .string({ required_error: 'Live site link is required' })
    .min(1, { message: 'Live site link is required' }),
});

const ProjectsPage = () => {
  const [resCount, setResCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [addProject] = useAddProjectMutation();
  const { data, isLoading: isProjectLoading } = useGetAllProjectsQuery(undefined);

  console.log(data);

  const handleSubmit = async (data: any) => {
    if (responsibilities.length <= 0) {
      toast.error('Must add job features');
      return;
    }
    if (technologies.length <= 0) {
      toast.error('Must add project technologies');
      return;
    }

    if (!file) {
      toast.error('Please upload a cover of project');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);

      const imageLink = await uploadFileToCloudinary(file);

      if (!imageLink) {
        toast.error('Failed to upload image');
        setIsLoading(false);
        return;
      }

      const payload = { ...data, cover: imageLink, technologies, features: responsibilities };

      const res = await addProject(payload).unwrap();

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

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  return (
    <Stack>
      <Container maxWidth='lg'>
        <Stack boxShadow={24} p={2} borderRadius={2}>
          <CustomForm
            onSubmit={handleSubmit}
            resolver={zodResolver(schema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <CustomInput label='Project Name' name='name' />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput label='Description' name='description' />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomSelectField
                  label='Project Category'
                  name='category'
                  items={[
                    { name: 'Frontend', value: 'Frontend' },
                    { name: 'Backend', value: 'Backend' },
                    { name: 'Full-stack', value: 'Full-stack' },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  label='Source Code Repo (optional)'
                  name='repositoryLink.source_code'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  label='Server side Code Repo (optional)'
                  name='repositoryLink.server_side_code'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  label='Client side Code Repo (optional)'
                  name='repositoryLink.client_side_code'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput label='Live Site Link' name='liveSiteLink' />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFileUploader
                  label='Upload a cover image of project'
                  name='file'
                  onFileUpload={handleFileUpload}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1.1 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MultiSelect setTechnologies={setTechnologies} />
              </Grid>
              <>
                {Array.from({ length: resCount }, (_, index) => index + 1).map((i: number) => (
                  <>
                    {i < resCount ? (
                      <Grid item xs={12} md={6} key={i}>
                        <TextField
                          label={'Features'}
                          variant='outlined'
                          color='secondary'
                          size='small'
                          fullWidth
                          placeholder='Add Project Features'
                          onChange={(e) =>
                            setResponsibilities((prev) => {
                              prev[i - 1] = e.target.value;
                              return prev;
                            })
                          }
                        />
                      </Grid>
                    ) : (
                      <Grid item xs={12} md={6} key={i}>
                        <Grid container spacing={2} key={i}>
                          <Grid item xs={10} key={i}>
                            <TextField
                              label={'Features'}
                              variant='outlined'
                              color='secondary'
                              size='small'
                              fullWidth
                              placeholder='Add Project Features'
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
              </>
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
        {isProjectLoading ? (
          <CircularLoader />
        ) : (
          <Container maxWidth='lg'>
            {data?.data?.map((project: IProject) => (
              <Grid container spacing={1} key={project._id} boxShadow={24} borderRadius={4}>
                <Grid item xs={12} md={4}>
                  <Image src={project.cover} alt={project.name} width={400} height={400} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Stack p={2} gap={0.5} borderRadius={4}>
                    <Typography variant='h5' lineHeight={1} fontWeight='700'>
                      {project.name}
                    </Typography>
                    <Typography variant='h6' lineHeight={1} fontWeight='500'>
                      Features:
                    </Typography>
                    <Divider />
                    {project.features.map((res) => (
                      <Typography variant='body1' pl={1} key={res} lineHeight={1}>
                        <CircleIcon sx={{ fontSize: '10px' }} /> {res}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Container>
        )}
      </Stack>
    </Stack>
  );
};

export default ProjectsPage;

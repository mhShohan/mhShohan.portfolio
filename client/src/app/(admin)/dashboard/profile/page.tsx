'use client';

import CircularLoader from '@/components/UI/CircularLoader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import { useGetProfileQuery } from '@/store/api/profile.api';
import { ITechnology } from '@/types';
import { Container, Divider, Grid, Stack, Typography } from '@mui/material';

interface IProfile {
  _id: string;
  name: string;
  title: string;
  email: string;
  bio: string;
  description: string;
  resume: string;
  contactNo: string;
  address: string;
  viewPersonalInterest: boolean;
  techStacks: {
    languages: ITechnology[];
    databases: ITechnology[];
    backend: ITechnology[];
    frontend: ITechnology[];
    tools: ITechnology[];
  };
}

// const defaultValues = {
//   name: '',
//   title: '',
//   email: '',
//   bio: '',
//   description: '',
//   resume: '',
//   contactNo: '',
//   address: '',
//   viewPersonalInterest: false,
// };

const socialLinksArray = [
  { id: 1, name: 'socialLinks.facebook', label: 'Facebook' },
  { id: 2, name: 'socialLinks.gitLab', label: 'GitLab' },
  { id: 3, name: 'socialLinks.github', label: 'GitHub' },
  { id: 4, name: 'socialLinks.leetcode', label: 'LeetCode' },
  { id: 5, name: 'socialLinks.linkedin', label: 'LinkedIn' },
  { id: 6, name: 'socialLinks.twitter', label: 'Twitter' },
];

const inputArray = [
  { id: 1, name: 'name', label: 'Name' },
  { id: 2, name: 'title', label: 'Title' },
  { id: 3, name: 'email', label: 'Email' },
  { id: 4, name: 'bio', label: 'Bio' },
  { id: 5, name: 'description', label: 'Description' },
  { id: 6, name: 'resume', label: 'Resume' },
  { id: 7, name: 'contactNo', label: 'Contact No' },
  { id: 8, name: 'address', label: 'Address' },
];

const ProfilePage = () => {
  const { data, isLoading } = useGetProfileQuery(undefined);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  if (isLoading)
    return (
      <Stack alignItems='center'>
        <CircularLoader />
      </Stack>
    );

  const defaultValues = data?.data;

  return (
    <Container maxWidth='lg'>
      <CustomForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Typography variant='h4'>Profile Information</Typography>
        <Divider />
        <Grid container spacing={1} my={1}>
          {inputArray.map((input) => (
            <Grid key={input.id} item xs={12} md={4}>
              <CustomInput label={input.label} name={input.name} />
            </Grid>
          ))}
        </Grid>
        <Typography variant='h4'>Social Links</Typography>
        <Divider />
        <Grid container spacing={1} my={1}>
          {socialLinksArray.map((input) => (
            <Grid key={input.id} item xs={12} md={4}>
              <CustomInput label={input.label} name={input.name} />
            </Grid>
          ))}
        </Grid>
        <Typography variant='h4'>Tech Stacks</Typography>
        <Divider />
      </CustomForm>
    </Container>
  );
};

export default ProfilePage;

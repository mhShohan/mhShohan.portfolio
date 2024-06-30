'use client';

import CircularLoader from '@/components/UI/CircularLoader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import { useGetProfileQuery, useUpdateProfileMutation } from '@/store/api/profile.api';
import { ITechnology } from '@/types';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CustomModal from '@/components/shared/CustomModal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useGetTechnologiesQuery } from '@/store/api/technology.api';
import { toast } from 'sonner';

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

type TTechArray = 'languages' | 'backend' | 'databases' | 'frontend' | 'tools';
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
  const [techStacks, setTechStacks] = useState<{
    languages: ITechnology[];
    databases: ITechnology[];
    backend: ITechnology[];
    frontend: ITechnology[];
    tools: ITechnology[];
  }>({
    languages: [],
    databases: [],
    backend: [],
    frontend: [],
    tools: [],
  });
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [frontModalOpen, setFrontModalOpen] = useState(false);
  const [backModalOpen, setBackModalOpen] = useState(false);
  const [databaseModalOpen, setDatabaseModalOpen] = useState(false);
  const [toolModalOpen, setToolModalOpen] = useState(false);
  const [viewPersonalInterest, setViewPersonalInterest] = useState(true);
  const { data, isLoading } = useGetProfileQuery(undefined);
  const { data: technologies } = useGetTechnologiesQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();

  const techStacksArray = [
    { field: 'languages', modalOpen: setLanguageModalOpen, open: languageModalOpen },
    { field: 'backend', modalOpen: setBackModalOpen, open: backModalOpen },
    { field: 'databases', modalOpen: setDatabaseModalOpen, open: databaseModalOpen },
    { field: 'frontend', modalOpen: setFrontModalOpen, open: frontModalOpen },
    { field: 'tools', modalOpen: setToolModalOpen, open: toolModalOpen },
  ];

  const handleSubmit = async (values: any) => {
    const payload = { ...values, techStacks, viewPersonalInterest };
    const toastId = toast.loading('Updating profile...');
    try {
      const res = await updateProfile(payload).unwrap();

      if (res.success) {
        toast.success('Profile updated successfully', { id: toastId });
      } else {
        toast.error('Failed to update profile', { id: toastId });
      }
    } catch (error) {
      toast.error('Failed to update profile', { id: toastId });
    }
  };

  useEffect(() => {
    const t = {
      languages: data?.data?.techStacks?.languages?.map((tech: ITechnology) => ({
        ...tech,
        visible: true,
      })),
      databases: data?.data?.techStacks?.databases?.map((tech: ITechnology) => ({
        ...tech,
        visible: true,
      })),
      backend: data?.data?.techStacks?.backend?.map((tech: ITechnology) => ({
        ...tech,
        visible: true,
      })),
      frontend: data?.data?.techStacks?.frontend?.map((tech: ITechnology) => ({
        ...tech,
        visible: true,
      })),
      tools: data?.data?.techStacks?.tools?.map((tech: ITechnology) => ({
        ...tech,
        visible: true,
      })),
    };
    setTechStacks(t);
    setViewPersonalInterest(data?.data?.viewPersonalInterest);
  }, [isLoading]);

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

        {/* language stack */}
        {techStacksArray.map((stack) => (
          <Grid container spacing={1} my={1} key={stack.field}>
            <Grid item xs={12} md={2} display='flex' alignItems='center'>
              <Typography variant='h5'>{stack.field}</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack
                border='1px solid gray'
                borderRadius={2}
                minHeight='50px'
                direction='row'
                alignItems='center'
                flexWrap='wrap'
                p={1}
              >
                {techStacks?.[stack.field as TTechArray]?.map((tech: ITechnology) => (
                  <>
                    {tech.visible && (
                      <Technology
                        field={stack.field as TTechArray}
                        setTechStacks={setTechStacks}
                        key={tech._id}
                        technology={tech}
                      />
                    )}
                  </>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={1} display='flex' alignItems='center'>
              <IconButton
                onClick={() => stack.modalOpen(true)}
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
        ))}

        <Divider />
        {/* <FormGroup sx={{ my: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={viewPersonalInterest}
                onChange={(e) => setViewPersonalInterest(e.target.checked)}
                color='secondary'
              />
            }
            label='View Personal Interest'
          />
        </FormGroup> */}

        <Divider />
        <br />
        <Button type='submit' variant='contained' color='secondary'>
          Save Changes
        </Button>
      </CustomForm>
      {technologies && (
        <>
          {techStacksArray.map((stack) => (
            <CustomModal
              key={stack.field}
              allTechStacks={technologies?.data}
              open={stack.open}
              setOpen={stack.modalOpen}
              setTechStacks={setTechStacks}
              field={stack.field as TTechArray}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default ProfilePage;

interface TechnologyProps {
  technology: ITechnology;
  theme?: 'light' | 'dark';
  field: 'languages' | 'databases' | 'backend' | 'frontend' | 'tools';
  setTechStacks: Dispatch<
    SetStateAction<{
      languages: ITechnology[];
      databases: ITechnology[];
      backend: ITechnology[];
      frontend: ITechnology[];
      tools: ITechnology[];
    }>
  >;
}

const Technology = ({ technology, theme = 'light', field, setTechStacks }: TechnologyProps) => {
  const bgColors = theme === 'dark' ? 'background.paper' : 'secondary.main';
  const color = theme === 'dark' ? 'secondary.main' : 'white';

  const handleDelete = (tech: ITechnology) => {
    setTechStacks((prev) => ({
      ...prev,
      [field]: prev[field].map((t) =>
        t._id === tech._id ? { ...t, isDeleted: true, visible: false } : t
      ),
    }));
  };

  return (
    <Box
      boxShadow={24}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        padding: '.4rem 0 .4rem .4rem',
        borderRadius: 1,
        backgroundColor: bgColors,
        color,
        height: 30,
        margin: '2px',
      }}
    >
      <Image src={technology.image} alt={technology.name} width={20} height={20} />
      <Typography variant='body1' fontWeight='500'>
        {technology.name}
      </Typography>
      <IconButton onClick={() => handleDelete(technology)}>
        <CloseIcon
          sx={{
            fontSize: '1.2rem',
            cursor: 'pointer',
            color: 'white',
            transition: 'all ease 200ms',
            '&:hover': { color: 'red' },
          }}
        />
      </IconButton>
    </Box>
  );
};

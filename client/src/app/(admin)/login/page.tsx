'use client';

import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import { login } from '@/services/actions/login';
import { setLoggedInUser } from '@/store/authSlice';
import { useAppDispatch } from '@/store/hooks';
import storage from '@/utils/storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email' }),
  password: z.string().min(6, { message: 'Password must contain at least 6 characters' }),
});

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await login(data);

      if (res?.success) {
        toast.success('Login Successful');
        storage.setToken(res.data.token);
        dispatch(setLoggedInUser(res.data.token));
        router.push('/dashboard');
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error('Failed to login!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth='xs'>
      <Stack py={4} px={6} boxShadow={24} mt={20} sx={{ borderRadius: '.6rem' }}>
        <Typography
          variant='h4'
          align='center'
          fontWeight='700'
          textTransform='uppercase'
          color='#1A374D'
          pb={2}
        >
          Admin Login
        </Typography>
        <CustomForm
          onSubmit={handleLogin}
          defaultValues={{ email: '', password: '' }}
          resolver={zodResolver(loginSchema)}
        >
          <Stack direction='column' gap={1}>
            <CustomInput name='email' label='Email' />
            <CustomInput name='password' label='Password' type='password' />
            <Button type='submit' color='secondary'>
              {isLoading ? (
                <CircularProgress
                  color='warning'
                  sx={{
                    width: '25px !important',
                    height: '25px !important',
                  }}
                />
              ) : (
                'Login'
              )}
            </Button>
          </Stack>
        </CustomForm>
      </Stack>
    </Container>
  );
};

export default LoginPage;

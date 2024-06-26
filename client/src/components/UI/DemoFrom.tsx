'use client';

import { Box, Button } from '@mui/material';
import React from 'react';
import CustomForm from '../shared/form/CustomForm';
import CustomInput from '../shared/form/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().min(1, 'Please enter your email!').email({ message: 'Invalid email' }),
});

const DemoFrom = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
    return true;
  };

  return (
    <Box display='flex' height='100vh' justifyContent='center' alignItems='center'>
      <Box width='500px'>
        <CustomForm
          onSubmit={handleSubmit}
          defaultValues={{ email: '' }}
          resolver={zodResolver(formSchema)}
        >
          <Box>
            <CustomInput name='email' label='Email' fullWidth={true} />
            <Button type='submit'>Submit</Button>
          </Box>
        </CustomForm>
      </Box>
    </Box>
  );
};

export default DemoFrom;

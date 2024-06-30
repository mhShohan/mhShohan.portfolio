'use client';

import CustomFileUploader from '@/components/shared/form/CustomFileUploader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Stack } from '@mui/material';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { z } from 'zod';

const schema = z.object({
  title: z
    .string({ required_error: 'Blog title is required' })
    .min(1, { message: 'Blog title is required' }),
});

const BlogsPage = () => {
  const [value, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  const handleSubmit = (data: any) => {
    console.log({ file, value, title: data.title });
  };

  return (
    <CustomForm
      onSubmit={handleSubmit}
      defaultValues={{ title: '' }}
      resolver={zodResolver(schema)}
    >
      <Stack>
        <Stack my={1}>
          <CustomInput label='Blog Title' name='title' />
        </Stack>
        <Stack mb={8}>
          <ReactQuill theme='snow' style={{ height: '250px' }} value={value} onChange={setValue} />
        </Stack>
        <Stack gap={2}>
          <CustomFileUploader
            label='Upload a cover image for the blog post'
            name='file'
            onFileUpload={handleFileUpload}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1.1 }}
          />
          <Button type='submit' sx={{ p: 1.1 }} fullWidth variant='contained' color='secondary'>
            {isLoading ? (
              <CircularProgress sx={{ width: '25px !important', height: '25px !important' }} />
            ) : (
              'Create Blog'
            )}
          </Button>
        </Stack>
      </Stack>
    </CustomForm>
  );
};

export default BlogsPage;

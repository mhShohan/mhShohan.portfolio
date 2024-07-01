'use client';

import CustomFileUploader from '@/components/shared/form/CustomFileUploader';
import CustomForm from '@/components/shared/form/CustomForm';
import CustomInput from '@/components/shared/form/CustomInput';
import uploadFileToCloudinary from '@/lib/uploadFileToCloudinary';
import { useCreateBlogMutation } from '@/store/api/blog.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Stack } from '@mui/material';
import React, { useState } from 'react';
import { set } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'sonner';
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
  const [createBlog] = useCreateBlogMutation();

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  const handleSubmit = async (data: any) => {
    setIsLoading(true);

    if (!file) {
      toast.error('Please upload a cover image for the blog post');
      setIsLoading(false);
      return;
    }
    if (!value) {
      toast.error('Please enter the blog content');
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

      const res = await createBlog({ title: data.title, cover: imageLink, text: value }).unwrap();

      if (res.success) {
        toast.success('Blog create successfully');
        setFile(null);
        setValue('');
        return true;
      } else {
        toast.error('Failed to create blog');
      }
    } catch (error) {
      toast.error('Failed to create blog');
    } finally {
      setIsLoading(false);
    }
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

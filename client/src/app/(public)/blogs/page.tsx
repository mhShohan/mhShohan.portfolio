'use client';

import Loader from '@/components/shared/Loader';
import { useGetAllBlogQuery } from '@/store/api/blog.api';
import { IBlog } from '@/types';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const BlogsPage = () => {
  const { data, isLoading } = useGetAllBlogQuery(undefined);

  if (isLoading) return <Loader />;

  const dateFormatter = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2} my={5}>
        {data?.data?.map((blog: IBlog) => (
          <Grid item xs={12} md={6} key={blog._id}>
            <Stack
              spacing={2}
              direction='row'
              boxShadow={24}
              p={4}
              bgcolor='#254B62'
              borderRadius={4}
            >
              <Box flex={1} height={100}>
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  width={300}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Stack flex={3} justifyContent='space-between'>
                <Box>
                  <Typography variant='body1'>{blog.title}</Typography>
                  <Typography variant='body2'>
                    Published Date: {dateFormatter(blog.createdAt)}
                  </Typography>
                </Box>
                <Link href={`/blogs/${blog._id}`}>
                  <Button>View Details</Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogsPage;

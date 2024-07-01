'use client';

import Loader from '@/components/shared/Loader';
import { useGetSingleBlogQuery } from '@/store/api/blog.api';
import { Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const BlogDetailsPage = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(params.id);

  if (isLoading) return <Loader />;

  function createMarkup() {
    return { __html: data?.data?.text };
  }

  return (
    <Container maxWidth='md'>
      <Stack my={5}>
        <Image
          src={data?.data?.cover}
          alt={data?.data?.title}
          width={500}
          height={300}
          style={{ width: '100%' }}
        />
        <Typography mt={2} variant='h4'>
          Q. {data?.data?.title}
        </Typography>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Stack>
    </Container>
  );
};

export default BlogDetailsPage;

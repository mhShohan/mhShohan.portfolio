import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Heading } from './ReuseableComponents';
import SingleBlog from './SingleBlog';
import Fade from 'react-reveal/Fade';
import { blogs } from '../data';

export default function Blog() {
  return (
    <BlogSection id="blogSection">
      <Container>
        <Fade top>
          <Heading>Blogs</Heading>
        </Fade>
        <br />
        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <SingleBlog blog={blog} key={blog.id} />
          ))}
        </Grid>
      </Container>
    </BlogSection>
  );
}

const BlogSection = styled.section`
  background: rgba(71, 109, 124, 0.5);
  padding: 70px 0 110px 0;
`;

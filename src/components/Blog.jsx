import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Heading } from './ReuseableComponents';
import SingleBlog from './SingleBlog';
import Fade from 'react-reveal/Fade';

export default function Blog() {
  return (
    <BlogSection id="blogSection">
      <Container>
        <Fade top>
          <Heading>Blog</Heading>
        </Fade>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Fade left>
              <SingleBlog />
            </Fade>
            <Fade right>
              <SingleBlog />
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade left>
              <SingleBlog />
            </Fade>
            <Fade right>
              <SingleBlog />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </BlogSection>
  );
}

const BlogSection = styled.section`
  background: rgba(71, 109, 124, 0.5);
  padding: 70px 0 110px 0;
`;

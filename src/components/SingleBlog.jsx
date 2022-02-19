import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function SingleBlog({ blog }) {
  return (
    <Grid item xs={12} md={6}>
      <Fade bottom>
        <SingleBlogContainer
          href={blog.source.link}
          rel="noreferrer"
          target="_blank"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <BlogImg src={blog.img} alt={blog.title} />
            </Grid>
            <Grid item xs={12} md={8}>
              <h3>{blog.title}</h3>
              <p>
                {blog.details.slice(0, 440)} <span>Continue Reading...</span>
              </p>
              <span>Source: {blog.source.name}</span>
            </Grid>
          </Grid>
        </SingleBlogContainer>
      </Fade>
    </Grid>
  );
}

const BlogImg = styled.img`
  width: 100%;
`;

const SingleBlogContainer = styled.a`
  margin-top: 10px;

  p {
    text-align: justify;
  }
  span {
    font-weight: 700;
  }
  a {
    color: #3838be;

    &:hover {
      text-decoration: underline;
    }
  }
`;

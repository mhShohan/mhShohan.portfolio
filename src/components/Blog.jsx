import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Heading } from './ReuseableComponents';
import SingleBlog from './SingleBlog';

export default function Blog() {
    return (
        <BlogSection id="blogSection">
            <Container>
                <Heading>Blog</Heading>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SingleBlog />
                        <SingleBlog />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleBlog />
                        <SingleBlog />
                    </Grid>
                </Grid>
            </Container>
        </BlogSection>
    );
}

const BlogSection = styled.section`
    background: rgba(71, 109, 124, 0.5);
    padding: 70px 0 70px 0;
`;

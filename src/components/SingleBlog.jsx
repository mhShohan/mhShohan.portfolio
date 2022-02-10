import { Grid } from '@mui/material';
import React from 'react';
import blog1 from '../assets/blog1.png';
import styled from 'styled-components';

export default function SingleBlog() {
    return (
        <SingleBlogContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <BlogImg src={blog1} alt="Blog 1" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <h3>Why I choose NextJS over CRA for new projects</h3>
                    <p>
                        I used to use Create React App (CRA) for building new
                        applications (i.e. app.example.com). For landing pages,
                        however, I would use NextJS for better SEO (i.e.
                        www.example.com). Nowadays I will exclusively use NextJS
                        over CRA when starting new applications for the
                        following three reasons.
                    </p>
                    <span>
                        Source:
                        <a href="https://daily.dev/"> Daily.dev</a>
                    </span>
                </Grid>
            </Grid>
        </SingleBlogContainer>
    );
}

const BlogImg = styled.img`
    width: 100%;
`;

const SingleBlogContainer = styled.div`
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

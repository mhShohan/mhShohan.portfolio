import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineEye } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

export default function SingleProject({ project }) {
  const { title, description, img, github, liveLink } = project;

  return (
    <Grid item lg={4} md={6} sm={12}>
      <Fade bottom>
        <ProjectItem>
          <img src={img} alt={title} />
          <div className="projectDetails">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="viewLinks">
            <a
              href={github}
              rel="noreferrer"
              target="_blank"
              className="gitIcon"
            >
              <GoMarkGithub /> <span>Source Code</span>
            </a>
            <a
              href={liveLink}
              rel="noreferrer"
              target="_blank"
              className="liveIcon"
            >
              <AiOutlineEye /> <span>Live View</span>
            </a>
          </div>
        </ProjectItem>
      </Fade>
    </Grid>
  );
}

const ProjectItem = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  position: relative;
  transition: 0.3s;
  margin-top: 30px;

  .projectDetails {
    background: #142850;
    min-height: 120px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0 0 4px 4px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3,
    p {
      color: #bad4da;
    }
  }
  .viewLinks {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 343;
    border-radius: 4px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s;

    .gitIcon {
      border: 1px solid #fff;
      padding: 5px 10px;
      border-radius: 4px;
      transition: 0.3s;
      font-weight: 600;
      display: flex;
      justify-content: center;

      span {
        margin-left: 4px;
      }

      &:hover {
        background: #fff;
        color: #000;
      }
    }
    .liveIcon {
      border: 1px solid #fff;
      padding: 5px 10px;
      border-radius: 4px;
      transition: 0.3s;
      font-weight: 600;
      display: flex;
      justify-content: center;
      margin: 10px;

      span {
        margin-left: 4px;
      }
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }

  &:hover {
    .viewLinks {
      opacity: 1;
    }
  }

  h3 {
    padding: 5px 10px;
    color: #000;
    text-align: center;
  }
  p {
    color: #000;
    padding: 0 15px 15px 15px;
    text-align: justify;
  }
  img {
    border-radius: 4px;
    width: 100%;
  }
`;

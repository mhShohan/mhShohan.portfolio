import { styled } from '@mui/material/styles';

export const Heading = styled('h2')({
  fontSize: '3rem',
  fontFamily: 'Ubuntu, serif',
  textAlign: 'center',
  textTransform: 'uppercase',
  position: 'relative',
  margin: 0,

  '&::before': {
    content: '""',
    display: 'block',
    width: '80px',
    height: '7px',
    background: '#BBE1FA',
    position: 'absolute',
    left: 'calc(50% - 40px)',
    bottom: 0,
  },

  '&::after': {
    content: '""',
    display: 'block',
    width: '300px',
    height: '3px',
    background: '#D8E3E7  ',
    position: 'absolute',
    left: 'calc(50% - 150px)',
    bottom: '2px',
    transform: 'skew(45deg)',
  },

  '@media (max-width: 1100px)': {
    fontSize: '4rem',
  },
  '@media (max-width: 900px)': {
    fontSize: '3.6rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '3rem',
  },
  '@media (max-width: 500px)': {
    fontSize: '2.2rem',
  },
});

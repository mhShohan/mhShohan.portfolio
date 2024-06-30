import { ITechnology } from '@/types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface TechnologyProps {
  technology: ITechnology;
  theme: 'light' | 'dark';
}

const Technology = ({ technology, theme }: TechnologyProps) => {
  const bgColors = theme === 'dark' ? 'background.paper' : 'secondary.main';
  const color = theme === 'dark' ? 'secondary.main' : 'white';

  return (
    <Box
      boxShadow={24}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        padding: '.4rem .8rem',
        borderRadius: 1,
        backgroundColor: bgColors,
        color,
        height: 30,
        margin: '2px',
      }}
    >
      <Image src={technology.image} alt={technology.name} width={20} height={20} />
      <Typography variant='body1' fontWeight='500'>
        {technology.name}
      </Typography>
    </Box>
  );
};

export default Technology;

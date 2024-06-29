import Image from 'next/image';
import loadingImage from '@/assets/loader.webp';
import { Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#0F151C',
      }}
    >
      <Image src={loadingImage} alt='banner' width={480} height={272} />
    </Stack>
  );
};

export default Loader;

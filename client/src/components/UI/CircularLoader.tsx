import { CircularProgress } from '@mui/material';

const CircularLoader = () => {
  return (
    <CircularProgress
      color='secondary'
      sx={{
        width: '100px !important',
        height: '100px !important',
      }}
    />
  );
};

export default CircularLoader;

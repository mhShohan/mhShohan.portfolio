'use client';

import { Box, Divider, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ViewSingleJob({ data }: { data: any }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton
        size='small'
        color='secondary'
        onClick={() => {
          setOpen(true);
        }}
      >
        <VisibilityIcon fontSize='small' />
      </IconButton>

      <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
        <Box sx={{ width: 800 }} role='presentation' p={2} mt={8}>
          <Typography variant='h3'>{data?.title}</Typography>
          <Typography variant='h5'>{data?.company}</Typography>
          <Divider sx={{ my: 2 }} />
          <Box dangerouslySetInnerHTML={{ __html: data?.description }} />
        </Box>
      </Drawer>
    </div>
  );
}

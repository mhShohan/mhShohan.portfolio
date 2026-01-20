'use client';

import { Box, Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ViewSingleJob({ data }: { data: any }) {
  const [open, setOpen] = React.useState(false);
  const statusColor = ['Found'].includes(data?.status)
    ? 'warning'
    : ['Applied'].includes(data?.status)
      ? 'success'
      : 'primary';

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
          <Typography variant='h5' fontWeight={700}>
            {data?.title}
          </Typography>
          <Stack direction='row' spacing={1} mt={1}>
            <Chip label={data?.company} sx={{ px: 4 }} color='secondary' variant='outlined' />
            <Chip label={data?.status} color={statusColor} variant='filled' />
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Box dangerouslySetInnerHTML={{ __html: data?.description }} />
        </Box>
      </Drawer>
    </div>
  );
}

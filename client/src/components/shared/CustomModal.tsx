import { ITechnology } from '@/types';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import Technology from '../UI/Technology';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  open,
  setOpen,
  allTechStacks,
  field,
  setTechStacks,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  allTechStacks: ITechnology[];
  field: 'languages' | 'databases' | 'backend' | 'frontend' | 'tools';
  setTechStacks: Dispatch<
    SetStateAction<{
      languages: ITechnology[];
      databases: ITechnology[];
      backend: ITechnology[];
      frontend: ITechnology[];
      tools: ITechnology[];
    }>
  >;
}) {
  const handleClose = () => setOpen(false);

  const handleClick = (tech: ITechnology) => {
    const { _id, name, image } = tech;

    setTechStacks((prev) => ({
      ...prev,
      [field]: [...prev[field], { _id, name, image, isDelete: false, visible: true }],
    }));
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ textAlign: 'center', mb: 2 }}
          >
            Select Technologies
          </Typography>
          <Box display='flex' flexWrap='wrap' justifyContent='center'>
            {allTechStacks.map((tech) => (
              <Button
                key={tech._id}
                variant='text'
                sx={{ m: 0, p: 0 }}
                onClick={() => handleClick(tech)}
              >
                <Technology technology={tech} theme='light' />
              </Button>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

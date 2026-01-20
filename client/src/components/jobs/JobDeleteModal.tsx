import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteJobMutation } from '@/store/api/job.api';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function JobDeleteModal({ id }: { id: string }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [deleteJob] = useDeleteJobMutation();

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = await deleteJob(id).unwrap();

      if (res.success) {
        toast.success('Job deleted successfully');
        return true;
      } else {
        toast.error('Failed to delete job');
      }
    } catch (error) {
      toast.error('Failed to delete job');
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <div>
      <IconButton size='small' color='error' onClick={() => handleOpen()}>
        <DeleteIcon fontSize='small' />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Delete Job
          </Typography>
          <Typography id='modal-modal-description'>
            Are you sure you want to delete this job?
          </Typography>

          <Box mt={2} display='flex' justifyContent='flex-end' gap={2}>
            <Button onClick={handleClose} size='small' variant='outlined' color='secondary'>
              Cancel
            </Button>

            <Button onClick={handleSubmit} size='small' variant='contained' color='error'>
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

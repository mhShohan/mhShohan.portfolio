'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Container maxWidth='sm'>
        <Box my={5}>
          <Typography variant='h4' fontWeight='700' textAlign='center'>
            Contact Me
          </Typography>
          <Typography variant='h6' textAlign='center'>
            If you have any questions, feel free to contact me
          </Typography>
        </Box>
      </Container>
      <Stack my={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              boxShadow={24}
              // border={`1px solid ${theme.palette.primary.main}`}
              p={5}
              m={1}
              borderRadius={2}
              width='100%'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <IconButton sx={{ backgroundColor: 'gray', '&:hover': { backgroundColor: 'gray' } }}>
                <RoomIcon sx={{ fontSize: '2.2rem', color: '#fff' }} />
              </IconButton>
              <Typography variant='h5' fontWeight='700'>
                Address
              </Typography>
              <Typography variant='body1'>Dhaka, Bangladesh</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              boxShadow={24}
              // border={`1px solid ${theme.palette.primary.main}`}
              p={5}
              m={1}
              borderRadius={2}
              width='100%'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <IconButton sx={{ backgroundColor: 'gray', '&:hover': { backgroundColor: 'gray' } }}>
                <EmailIcon sx={{ fontSize: '2.2rem', color: '#fff' }} />
              </IconButton>
              <Typography variant='h5' fontWeight='700'>
                Email
              </Typography>
              <Typography variant='body1'>mehdihasanshohan25@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              boxShadow={24}
              // border={`1px solid ${theme.palette.primary.main}`}
              p={5}
              m={1}
              borderRadius={2}
              width='100%'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <IconButton sx={{ backgroundColor: 'gray', '&:hover': { backgroundColor: 'gray' } }}>
                <PhoneIphoneIcon sx={{ fontSize: '2.2rem', color: '#fff' }} />
              </IconButton>
              <Typography variant='h5' fontWeight='700'>
                Phone & Whatsapp
              </Typography>
              <Typography variant='body1'>+8801721146655</Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Divider />
      <Container maxWidth='md'>
        <Box my={2}>
          <Typography variant='h6' textAlign='center'>
            Or send me a message, I will get back to you as soon as possible...!!!
          </Typography>
        </Box>
        <Stack boxShadow={24} width='500px' p={6} m='auto' gap={1}>
          <TextField
            label='Your Name'
            variant='standard'
            focused
            size='small'
            fullWidth
            color='primary'
          />
          <TextField
            label='Your Email'
            fullWidth
            size='small'
            color='primary'
            variant='standard'
            focused
          />
          <TextField
            label='Message'
            fullWidth
            multiline
            rows={6}
            size='small'
            color='primary'
            variant='standard'
            focused
          />
          <Button variant='contained' color='primary' size='large' endIcon={<SendIcon />}>
            Send Message
          </Button>
        </Stack>
        <br />
        <br />
      </Container>
    </Container>
  );
};

export default ContactPage;

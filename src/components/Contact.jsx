import { Button, Container, Grid, TextField } from '@mui/material';
import styled from 'styled-components';
import { Heading } from './ReuseableComponents';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinkItem } from './ReuseableComponents';
import Fade from 'react-reveal/Fade';

const theme = createTheme({
  //   status: {
  //     secondary: '#142850',
  //   },
  palette: {
    secondary: {
      main: '#142850',
    },
  },
});

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <ContactSection id="ContactSection">
        <Container>
          <Fade bottom>
            <Heading>Contact</Heading>
          </Fade>
          <Fade bottom>
            <Information>
              <Grid container>
                <Grid item md={5}>
                  <ContactInfo>
                    <IconContainer>
                      <FmdGoodOutlinedIcon />
                      <h4>Shadhinota Dibosh Hall, BSMRSTU</h4>
                    </IconContainer>
                    <IconContainer>
                      <EmailOutlinedIcon />
                      <h4>mehdihasanshohan17@gmail.com</h4>
                    </IconContainer>
                    <IconContainer>
                      <PhoneIphoneOutlinedIcon />
                      <h4>+8801721146655</h4>
                    </IconContainer>
                    <LinkItem banner={false} />
                  </ContactInfo>
                </Grid>
                <Grid item md={7}>
                  <ContactForm>
                    <form>
                      <TextField
                        id="demo-helper-text-misaligned"
                        label="Your Name"
                        fullWidth
                        color="secondary"
                        margin="dense"
                        className="inputField"
                      />
                      <TextField
                        id="demo-helper-text-misaligned"
                        label="Your Email"
                        fullWidth
                        color="secondary"
                        margin="dense"
                      />
                      <TextField
                        id="demo-helper-text-misaligned"
                        label="Message"
                        fullWidth
                        multiline
                        rows={6}
                        color="secondary"
                        margin="dense"
                      />
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        endIcon={<SendIcon />}
                      >
                        Send Message
                      </Button>
                    </form>
                  </ContactForm>
                </Grid>
              </Grid>
            </Information>
          </Fade>
        </Container>
      </ContactSection>
    </ThemeProvider>
  );
}

const ContactSection = styled.section`
  background: rgba(71, 109, 124, 0.5);
  padding: 70px 0 70px 0;
`;

const Information = styled.div`
  background: rgba(26, 55, 77, 0.5);
  margin-top: 30px;
  border-radius: 6px;
  padding: 40px 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-left: 50px;

  @media (max-width: 850px) {
    align-items: center;
    margin-left: 30px;
    margin-bottom: 50px;
  }
  @media (max-width: 450px) {
    margin-left: 15px;
  }
`;
const ContactForm = styled.div`
  padding: 0 30px;
  border-left: 1px solid #142850;

  @media (max-width: 900px) {
    border-left: none;
  }
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  color: #000;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 6px;

  svg {
    width: 2rem;
    height: 2rem;
  }
  h4 {
    margin-left: 4px;
    font-size: 22px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 550px) {
      font-size: 18px;
    }
    @media (max-width: 450px) {
      font-size: 18px;
    }
  }
  @media (max-width: 450px) {
    padding-bottom: 2px;
  }
`;

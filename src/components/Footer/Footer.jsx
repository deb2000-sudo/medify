import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./Footer.module.css";
import { ReactComponent as LogoIcon } from "../../assets/medify-logo-icon.svg";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import pinintrest from "../../assets/pinintrest.png";
import FooterLink from "../FooterLink/FooterLink";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1B3C74", pb: 3, pt: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
              <LogoIcon height={36} alt="medify" mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={youtube} height={36} />
                <Box component="img" src={pinintrest} height={36} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;

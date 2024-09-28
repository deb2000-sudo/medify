import { Box, Container, Grid, Typography } from "@mui/material";
import ourfamilybanner from "../../../assets/our-families-banner.png";
const Ourfamilies = () => {
  return (
    <Box pt={3} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container alignItems="center" spacing={{ xs: 2, md: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              fontSize={17}
              color="#2AA7FF"
              fontFamily="Poppins"
            >
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography variant="h2" fontFamily="Poppins" fontWeight={600} color="#1B3C74">
              Our Families
            </Typography>
            <Typography color="#77829D" lineHeight={3} fontFamily='Inter' fontWeight='500'>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={ourfamilybanner}
              width={1}
              height="auto"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Ourfamilies;

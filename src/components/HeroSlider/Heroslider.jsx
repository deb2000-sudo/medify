import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import homeimg from "../../assets/Homepage.webp";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Heroslider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          pt={2}
        >
          <Box>
            <Typography variant="h4" component="h1" fontFamily='Poppins' fontWeight={500}>
              Skip the travel! Find Online
            </Typography>
            <Typography variant="h2" component="h1" mb={1} fontFamily='Poppins' fontWeight={600}>
              Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
            </Typography>
            <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3} fontFamily='Poppins'>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Link to="/search">
              <Button variant="contained" size="large" disableElevation sx={{textTransform:'none'}}>
                Find Centers
              </Button>
            </Link>
          </Box>
          <Box component={"img"} src={homeimg} width={{ xs: 1, md: "50%" }} />
        </Stack>
      </SwiperSlide>
    </Swiper>
  );
};

export default Heroslider;

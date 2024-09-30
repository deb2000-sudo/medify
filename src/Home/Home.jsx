import FAQ from "../components/Sections/FAQ/FAQ";
import { Box, Container, Stack } from "@mui/material";
import Ourfamilies from "../components/Sections/OurFamilies/Ourfamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import Patientcaring from "../components/Sections/PatientCaring/Patientcaring";
import Specialist from "../components/Sections/Specialist/Specialist";
import Specialization from "../components/Sections/Specialization/Specialization";
import Offers from "../components/Sections/Offers/Offers";
import Navbar from "../components/Navbar/Navbar";
import Heroslider from "../components/HeroSlider/Heroslider";
import Heroservice from "../components/HeroServices/Heroservice"
import SearchHospital from "../components/SearchHospital/SearchHospital";
const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl">
          <Heroslider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital/>
            <Heroservice/>
          </Stack>
        </Container>
      </Box>
      <Offers />
      <Specialization />
      <Specialist />
      <Patientcaring />
      <Blogs />
      <Ourfamilies />
      <FAQ />
    </Box>
  );
};

export default Home;

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Iconcard from "../../IconCard/Iconcard";
import drugstoreIcon from "../../../assets/Drugstore.png";
import Heartcheck from "../../../assets/heart-check.png";
import immune from "../../../assets/Immune.png";
import laboratory from "../../../assets/laboratory.png";
import monitor from "../../../assets/Monitor.png";
import stethoscope from "../../../assets/Stethoscope.png";
import testtube from "../../../assets/testtube.png";
import xray from "../../../assets/X-Ray.png";
const Specialization = () => {
  const data = [
    { icon: drugstoreIcon, title: "Dentistry" },
    { icon: Heartcheck, title: "Primary Care" },
    { icon: immune, title: "Cardiology" },
    { icon: laboratory, title: "MRI Resonance" },
    { icon: monitor, title: "Blood Test" },
    { icon: stethoscope, title: "Piscologist" },
    { icon: testtube, title: "Laboratory" },
    { icon: xray, title: "X-Ray" },
  ];
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4} fontWeight={600} color="#1B3C74" fontFamily="Poppins">
          Find by specialisation
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {data.map((item) => (
            <Grid item xs={4} md={3} key={item.title}>
              <Iconcard
                img={item.icon}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation sx={{textTransform:"none"}}>
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specialization;

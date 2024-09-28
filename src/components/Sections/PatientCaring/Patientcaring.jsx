import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Patientcaringbanner from "../../../assets/patientcaring.png";
import bluetick from "../../../assets/bluetick.png";
const Patientcaring = () => {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component="img" src={Patientcaringbanner} width={1} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} color="#1B3C74" fontFamily="Poppins">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography variant="h2" mb={1} color="#1B3C74" fontWeight={600}>
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>
            <Typography color="#77829D" lineHeight={1.8} fontFamily="Poppins">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={bluetick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Stay Updated About Your Health"
                  primaryTypographyProps={{
                    fontFamily: "Poppins",
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 500,
                    color: "#1B3C74",
                  }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={bluetick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Check Your Results Online"
                  primaryTypographyProps={{
                    fontFamily: "Poppins",
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 500,
                    color: "#1B3C74",
                  }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={bluetick} height={22} width={22} />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Your Appointments"
                  primaryTypographyProps={{
                    fontFamily: "Poppins",
                    fontSize: { xs: 14, md: 18 },
                    fontWeight: 500,
                    color: "#1B3C74",
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Patientcaring;

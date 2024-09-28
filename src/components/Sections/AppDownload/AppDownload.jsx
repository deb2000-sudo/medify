import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple_store.png";
import arrow from "../../../assets/arrow.png";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Smsform from "../../SmsForm/Smsform";
const AppDownload=()=>{
    return (
        <Box
          sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
        >
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={5.5}>
                <Box src={mobile} component="img" width={1} height="auto" />
              </Grid>
    
              <Grid item xs={12} md={6.5}>
                <Box
                  position="relative"
                  pl={{ xs: "36px", md: "50px" }}
                  mb={{ xs: 4, md: 0 }}
                >
                  <Typography variant="h2" mb={2} color="#1B3C74" fontWeight="600" fontFamily="Poppins">
                    Download the
                    <br />
                    <Box component="span" color="#2AA7FF">
                      Medify{" "}
                    </Box>
                    App
                  </Typography>
    
                  <Box
                    src={arrow}
                    component="img"
                    width={{ xs: 24, md: 40 }}
                    position="absolute"
                    left={0}
                    top={50}
                  />
    
                  <Smsform />
    
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, md: 2 }}
                  >
                    <Button
                      sx={{
                        bgcolor: "#333",
                        color: "#fff",
                        py: 1.5,
                        borderRadius: 1.5,
                        textTransform:"none",
                        '&:hover':{
                            backgroundColor:'#2AA7FF'
                        }
                      }}
                      size={"large"}
                      startIcon={<img src={playstore} height={24} alt="playstore"/>}
                      variant="contained"
                      disableElevation
                    >
                      Google Play
                    </Button>
                    <Button
                      sx={{
                        bgcolor: "#333",
                        color: "#fff",
                        py: 1.5,
                        borderRadius: 1.5,
                        textTransform:'none',
                        '&:hover':{
                            backgroundColor:'#2AA7FF'
                        }
                      }}
                      size="large"
                      startIcon={<img src={apple} height={24} alt="astore"/>}
                      variant="contained"
                      disableElevation
                    >
                        Apple Store
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );

}

export default AppDownload;
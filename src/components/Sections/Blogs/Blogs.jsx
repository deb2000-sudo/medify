import { Box, Container, Grid, Typography } from "@mui/material";
import Blogcard from "../../BlogCard/Blogcard";
const Blogs=()=>{
    return(
        <Box py={6}>
            <Container>
                <Typography color='#2AA7FF' fontWeight={600} textAlign='center'>
                    Blog & News
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2} fontFamily='Poppins' color='#1B3C74' fontWeight={600}>
                    Read Our Latest News
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Blogcard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Blogcard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Blogcard />
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default Blogs;
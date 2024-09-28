import FAQ from "../components/Sections/FAQ/FAQ";
import {Box} from '@mui/material';
import Ourfamilies from "../components/Sections/OurFamilies/Ourfamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
const Home=()=>{
return(
    <Box>
        <Blogs/>
        <Ourfamilies/>
        <FAQ/>
    </Box>
)
}

export default Home;
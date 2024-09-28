import FAQ from "../components/Sections/FAQ/FAQ";
import {Box} from '@mui/material';
import Ourfamilies from "../components/Sections/OurFamilies/Ourfamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import Patientcaring from "../components/Sections/PatientCaring/Patientcaring";
import Specialist from "../components/Sections/Specialist/Specialist";
import Specialization from "../components/Sections/Specialization/Specialization";
import Offers from "../components/Sections/Offers/Offers";
import Navbar from "../components/Navbar/Navbar";
const Home=()=>{
return(
    <Box>
        <Box>
            <Navbar/>
        </Box>
        <Offers/>
        <Specialization/>
        <Specialist/>
        <Patientcaring/>
        <Blogs/>
        <Ourfamilies/>
        <FAQ/>
    </Box>
)
}

export default Home;
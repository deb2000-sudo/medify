import FAQ from "../components/Sections/FAQ/FAQ";
import {Box} from '@mui/material';
import Ourfamilies from "../components/Sections/OurFamilies/Ourfamilies";
import Blogs from "../components/Sections/Blogs/Blogs";
import Patientcaring from "../components/Sections/PatientCaring/Patientcaring";
import Specialist from "../components/Sections/Specialist/Specialist";
import Specialistcard from "../components/SpecialistCard/Specialistcard";
import Specialization from "../components/Sections/Specialization/Specialization";
const Home=()=>{
return(
    <Box>
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
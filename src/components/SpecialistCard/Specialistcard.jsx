import { Box, Typography } from "@mui/material";

const Specialistcard=({img,title,designation})=>{
return(
    <Box textAlign='center'>
            <Box
                component='img'
                src={img}
                width={1}
                sx={{ boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)', borderRadius: '250px 240px 4px 4px' }}
                mb={2}
            />
            <Typography
                fontSize={{ xs: 16, md: 24 }}
                fontWeight={400}
                color='#1B3C74'
                fontFamily='Poppins'
            >
                {title}
            </Typography>
            <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={500}
                color='#2AA7FF'
                fontFamily='Poppins'
            >
                {designation}
            </Typography>
        </Box>
)
}

export default Specialistcard;
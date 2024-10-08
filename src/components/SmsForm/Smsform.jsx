import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
const Smsform=()=>{
    return (
        <Box mb={5}>
            <Typography fontWeight={700} mb={1} fontFamily='Lato'>
                Get the link to download the app
            </Typography>
            <Box component='form' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                <TextField
                    sx={{
                        border: '1px solid #F0F0F0',
                        flex: 1,
                    }}
                    placeholder="Enter phone number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                +91
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <Button type='submit' size='large' variant="contained" disableElevation sx={{textTransform:"none"}}>
                    Send SMS
                </Button>
            </Box>
        </Box>
    )
}

export default Smsform;
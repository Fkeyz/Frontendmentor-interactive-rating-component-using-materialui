
import { createTheme } from '@mui/material';

const theme = createTheme({
    typography:{
        fontFamily: [
            'Overpass', 
            'sans-serif',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
    
})

export default theme;
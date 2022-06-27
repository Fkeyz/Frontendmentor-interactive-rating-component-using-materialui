import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab'


const RoundBtn = styled(Fab) ({
    backgroundColor: '#262F38',
    borderColor: ' #262F38',
    color: 'hsl(217, 12%, 63%)',
    fontSize: '15px',
    height: '45px',
    borderRadius: '100% !important',
    width: '45px',
    borderCollapse: 'seperate',
    boxShadow: 'none',

    '&:hover': {
        backgroundColor: 'hsl(25, 97%, 53%)',
        boxShadow: 'none',
        color: 'white',
        
    },
    '&:active' : {
        backgroundColor: '#373b40',
    },
    shape: {
        borderRadius: '20px !important',
      }, 
})

export default RoundBtn;
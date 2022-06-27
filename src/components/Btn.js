import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Btn = styled(Button) ({
    backgroundColor: 'hsl(25, 97%, 53%)',
    borderColor: ' hsl(25, 97%, 53%)',
    color: 'hsl(0, 0%, 100%)',
    fontSize: '15px',
    borderRadius: '20px',
    fontWeight: 'bold',
    marginLeft: '25px',
    alignSelf: 'center',
    boxShadow: 'none',

    '&:hover': {
        backgroundColor: 'white',
        boxShadow: 'none',
        color: 'hsl(25, 97%, 53%)',
        borderColor: 'white',
        
    },
    '&:active' : {
        backgroundColor: '#373b40',  
    }, 
})

export default Btn;
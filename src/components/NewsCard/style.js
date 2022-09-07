import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    media:{
    height: 250,
    },
    border:{
        border:'solid'
    },
    fullHeightCard:{
        height:'100%'
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottom:'10px solid white',
        
        boxShadow: '2px 18px 20px 20px #666666',
        '&:hover':{
            transform: 'scale(1.04)',
            boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.25)'
        }
    },
    activeCard:{
        borderBottom:'10px solid #22289a'
    },
    grid:{
        display:'flex'
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:'20px'
    },
    title:{
        padding:'0 16px',

    },
    cardActions:{
        padding:'0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between',
    }

})
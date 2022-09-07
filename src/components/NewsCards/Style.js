import {makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container:{
        padding:'0 5%',
        width:'100',
        margin:0
     },
     card:{
         display:'flex',
         flexDirection:'column',
         justifyContent:'space-between',
         alignItems:'center',
         width:'100%',
         height:'45vh',
         padding:'10%',
         borderRadius: 10,
         color:'white',
         boxShadow: '2px 18px 20px 20px #666666',
          '&:hover':{
            transform: 'scale(1.04)',
            boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.25)'
        }
     },
     infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
     }
})
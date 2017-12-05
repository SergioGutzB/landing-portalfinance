import { variables } from '../../styles/variables';

let container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  }

  export const styles = {
    content : {
        background: variables.navy_blue,
        height: 200,
        widht: '100%',
        placeContent:'center',
        padding: '30px 80px 0px 80px',        
        ...container        
    },
    contact: {
        ...container,
        flex: 'flex-start',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
      },
    social: {
        ...container,
        flex: 'flex-end',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
      },
    title:{
      fontFamily: 'Roboto Light',
      color:'white',
      fontSize: 20,
      fontWeight: 'bold'     
    },
    element:{
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px",
      height: "60px",      
    },
    element_social:{
      display: "flex",
      flexDirection: "row",
      padding: "0px 10px",
      height: "60px",
      justifyContent: "center",      
    },
    icon:{
      width: "20px",
      height: "auto",
      AlignSelf: "flex-end",
      marginTop: "10px",
      justifyContent: "space-between"      
    },
    flag_icon:{
      width: "20px",
      height: "auto",
      AlignSelf: "flex-end",
      marginTop: "10px",
      marginLeft:"5px",
      justifyContent: "space-between"      
    },
    social_icon:{
      width: "50px",
      height: "auto",
      AlignSelf: "flex-end",
      marginTop: "10px",
      justifyContent: "center",
    },
    text:{
      color:'white',
      padding: "0px 10px",
      fontFamily: 'Roboto Light',
      marginTop: "10px",
      alignContent: "left",
      
    }
  }    
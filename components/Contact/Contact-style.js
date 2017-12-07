import { variables } from '../../styles/variables';

let container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
}

const text = {
  fontFamily: 'Roboto Light',
  color:'white',
  fontWeight: 100,
  fontSize: 14,
}

export const styles = {
  content : {
    background: variables.navy_blue,
    height: 200,
    widht: '100%',
    placeContent:'center',
    padding: '30px 14%',
    ...container,
    justifyContent: "flex-start",
    '@media (max-width: 479px)': {
      flexDirection: "column",
      padding: '30px 45px',
    },
  },
  contact: {
    flex: 'flex-start',
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginRight: 40,
    '@media (max-width: 479px)': {
      marginRight: 0,
    },
  },
  title:{
    ...text,
    fontWeight: 'bold'
  },
  element:{
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  icon:{
    width: 20,
    height: "auto",
    AlignSelf: "flex-end",
    marginTop: 10,
    justifyContent: "space-between",
    fill: 'white',
  },
  flag_icon:{
    width: 20,
    height: "auto",
    AlignSelf: "flex-end",
    marginTop: 10,
    marginLeft: 5,
    justifyContent: "space-between",
    fill: 'white',
  },
  text:{
    ...text,
    padding: "0px 10px",
    marginTop: 10,
    alignContent: "left",
  },
  map: {
    flex: 'auto',
    ...container,
    justifyContent: 'center',
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
    '@media (max-width: 620px)': {
      display: 'none',
    },
  }
}

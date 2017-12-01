import { variables } from '../../styles/variables';

export const styles = {
  container: {
    background: variables.white,
    widht: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    padding: '50px 0'
  },
  title_container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    padding: '0 15% 0',
    fontFamily:"Roboto Light",
    textAlign:"center",
    lineHeight: 1,
    '@media (max-width: 479px)': {
      padding: '0 20px 0',
    },
  },
  title: {
    margin: 0,
    color: variables.text,
    '@media (max-width: 479px)': {
      fontSize:"1.2rem",
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize:"2rem",
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize:"2.2rem",
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize:"2.2rem",
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize:"2.8rem",
    },
    '@media (min-width: 1461px)': {
      fontSize:"3rem",
    },
  },
  subtitle:{
    padding: "0 12%",
    margin: '10px',
    fontFamily:"Roboto Light",
    color:variables.text_gray,
    '@media (max-width: 479px)': {
      fontSize:".9rem",
      padding: "0 0%",
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize:"1rem",
      padding: "0 5%",
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize:"1rem",
      padding: "0 8%",
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize:"1rem",
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize:"1.2rem",
    },
    '@media (min-width: 1461px)': {
      fontSize:"1.4rem",
    },
  },
  content: {
    width: '100%',
  },
  widget_container:{
    padding: '0px 60px',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: 'wrap',
    widget: {
      width: '28%',
      background: 'red',
    }
  },
  wwd: {
    marginTop: 30,
    width: '100%',
    backgroundColor: variables.mint,
    display: 'flex',
    content: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      alignContent: 'center',
      fontFamily:"Roboto Light",
      padding: '40px 0',
      box: {
        marginLeft: 30,
      },
      title: {
        fontWeight: 100,
        lineHeight: 1,
        margin: 0,
        color: 'white',
        fontSize: '4rem',
      },
      text: {
        margin: '15px 0 25px',
        color: 'white',
        width: '45%',
      },
      button: {
      },
    },
    image: {
      width: '50%',
      position:'relative',
      image: {
        position: 'absolute',
        top: -30,
        width: 'calc(95%)',
      }
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '30px 0',
    left: {
      padding: '50px',
      width: '50%',
    },
    right: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'center',
      width: '45%',
      padding: '30px 50px',
    },
    title: {
      fontWeight: 100,
      lineHeight: 1,
      margin: 0,
      color: variables.text,
      fontSize: '2.2rem',
    },
    description: {
      textAlign: 'left',
      color: variables.text,
      margin: '5px 0',
    },
    button: {
      marginTop: 20,
    }
  }
}

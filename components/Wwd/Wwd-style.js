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
  },
  title: {
    margin: 0,
    fontSize:"3rem",
    color: variables.text,
  },
  subtitle:{
    padding: "0 12%",
    margin: '10px',
    fontFamily:"Roboto Light",
    fontSize:"1.4rem",
    color:variables.text_gray,
  },
  content: {
    width: '100%',
  },
  widget_container:{
    padding: '0px 60px',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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

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
    padding: '15px 0 70px'
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
    lineHeight: 1.3,
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
    marginTop: 50,
    width: '100%',
    backgroundColor: variables.mint,
    display: 'flex',
    position:'relative',
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      alignContent: 'center',
      fontFamily:"Roboto Light",
      '@media (max-width: 490px)': {
        width: '100%',
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
        width: '100%',
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        width: '50%',
        padding: '40px 0',
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        width: '50%',
        padding: '40px 0',
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        width: '50%',
        padding: '40px 10px',
      },
      '@media (min-width: 1461px)': {
        padding: '60px 20px',
        width: '50%',
      },
      box: {
        marginLeft: 30,
        '@media (max-width: 490px)': {
          marginLeft: 0,
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          alignContent: 'center',
        },
        '@media (min-width: 491px) and (max-width: 767px)': {
          marginLeft: 0,
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          alignContent: 'center',
        },
        '@media (min-width: 768px) and (max-width: 1024px)': {
          marginLeft: 0,
          padding: '20px 40px',
        },
      },
      title: {
        fontWeight: 100,
        lineHeight: .9,
        margin: 0,
        color: 'white',
        '@media (max-width: 490px)': {
          fontSize: 50,
          textAlign: 'center',
        },
        '@media (min-width: 491px) and (max-width: 767px)': {
          fontSize: 50,
          textAlign: 'center',
        },
        '@media (min-width: 768px) and (max-width: 1024px)': {
          fontSize: 40,
        },
        '@media (min-width: 1025px) and (max-width: 1225px)': {
          fontSize: '3.7rem',
        },
        '@media (min-width: 1225px) and (max-width: 1461px)': {
          fontSize: '4.5rem',
        },
        '@media (min-width: 1462px) ': {
          fontSize: '5rem',
        },
      },
      text: {
        margin: '15px 0 25px',
        color: 'white',
        width: '45%',
        lineHeight: 1.3,
        '@media (max-width: 490px)': {
          alignSelf: 'center',
          width: '70%',
          padding: '30px 0',
          textAlign: 'center',
        },
        '@media (min-width: 491px) and (max-width: 767px)': {
          alignSelf: 'center',
          width: '70%',
          padding: '30px 0',
          textAlign: 'center',
        },
        '@media (min-width: 768px) and (max-width: 1024px)': {
          alignSelf: 'center',
          width: '75%',
          padding: '0',
          textAlign: 'left',
        },
        '@media (min-width: 1250px) and (max-width: 1400px)': {
          width: '50%',
          padding: '10px 0',
        },
      },
      button: {
      },
    },
    image: {
      position: 'absolute',
      top: '-8%',
      right: '8%',
      '@media (max-width: 490px)': {
        display: 'none',
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
        display: 'none',
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        right: '3%',
      },
      '@media (min-width: 1025px) and (max-width: 1249px)': {
        right: '3.5%',
      },
      '@media (min-width: 1250px) and (max-width: 1300px)': {
        right: '4%',
      },
    }
  },
}

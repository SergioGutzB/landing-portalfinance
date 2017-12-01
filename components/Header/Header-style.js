import { variables } from '../../styles/variables';

const heightLogo = 90;
const padding = 45;

export const styles = {
  box: {
    width: '100%',
    position: 'fixed',
    zIndex: 100,
  },
  center: {
    '@media (max-width: 479px)': {
      display: 'none',
    },
  },
  container: {
    //background: variables.navy_blue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: heightLogo+10,
    paddingTop: padding,
    paddingBottom: padding,
    paddingLeft: padding,
    left: {
      '@media (max-width: 479px)': {
        display: 'none',
      },
    },
    right: {
      '@media (max-width: 479px)': {
        width: '100%',
      },
    },
    '@media (max-width: 479px)': {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5
    },
    paddingRight: padding,
    '@media (min-width: 480px) and (max-width: 767px)': {
      height: heightLogo -20,
      paddingTop: padding -20,
      paddingBottom: padding -20,
      paddingLeft: padding -20,
      paddingRight: padding -20,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      height: heightLogo -20,
      paddingTop: padding -20,
      paddingBottom: padding -20,
      paddingLeft: padding -20,
      paddingRight: padding -20,
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      height: heightLogo -15,
      paddingTop: padding -15,
      paddingBottom: padding -15,
      paddingLeft: padding -15,
      paddingRight: padding -15,
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      height: heightLogo -10,
      paddingTop: padding -10,
      paddingBottom: padding -10,
      paddingLeft: padding -10,
      paddingRight: padding -10,
    },
  },
  logo: {
    height:  heightLogo,
    widht: "auto",
    '@media (max-width: 479px)': {
      height:  heightLogo - 20,
      display: 'none',
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      height:  heightLogo - 20,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      height:  heightLogo - 20,
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      height:  heightLogo - 15,
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      height:  heightLogo - 10,
    },
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    listStyleType: "none",
    '@media (max-width: 479px)': {
      justifyContent: 'space-between',
      padding:0,
      width: '100%',
    },
    '@media (min-width: 480px)': {
      justifyContent: 'flex-end',
    },
    item: {
      color: "white",
      fontFamily: "helvetica",
      padding: "0",
      fontSize: 14,
      whiteSpace:'nowrap',
      '@media (max-width: 479px)': {
        paddingLeft: 0,
        fontSize: 12,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        paddingLeft: 30,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        paddingLeft: 35,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        paddingLeft: 40,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        paddingLeft: 45,
      },
      '@media (min-width: 1462px)': {
        paddingLeft: 50,
      },
    }
  },
}

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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: heightLogo+10,
    paddingTop: padding,
    paddingBottom: padding,
    paddingLeft: padding,
    paddingRight: padding,
    '@media (max-width: 479px)': {
      paddingTop: 0,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    left: {
      '@media (max-width: 767px)': {
        display: 'none',
      },
    },
    right: {
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },
  logo: {
    height:  heightLogo,
    widht: "auto",
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
      fontSize: 14,
      whiteSpace:'nowrap',
      paddingBottom: 3,
      '@media (max-width: 479px)': {
        marginLeft: 0,
        fontSize: 12,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        marginLeft: 30,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        marginLeft: 35,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        marginLeft: 40,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        marginLeft: 45,
      },
      '@media (min-width: 1462px)': {
        marginLeft: 50,
      },
    }
  },
}

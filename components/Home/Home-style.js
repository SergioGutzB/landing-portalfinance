import { variables } from '../../styles/variables';
const Background = '../../static/images/foto1_fondos_1920x1098-01.jpg';

export const styles = {
  background: {
    flex: 1,
    height: 'calc(100vh)',
    overflow: 'hidden',
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    widht: '100%',
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "white",
    margin: 0,
    fontSize: '120px',
    fontFamily: "Roboto Light",
    fontWeight: 100,
    '@media (max-width: 479px)': {
      fontSize: '35px',
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize: '40px',
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: '60px',
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize: '84px',
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize: '94px',
    },
  },
  subTitle: {
    color: "white",
    fontFamily: "Roboto Light",
    fontSize: 30,
    fontWeight: 100,
    margin: 0,
    marginTop: 15,
    '@media (max-width: 479px)': {
      fontSize: '16px',
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize: '18px',
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: '22px',
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize: '26px',
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize: '28px',
    },
  },
  buttoms: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    buttom: {
      '@media (max-width: 479px)': {
        width: 120,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        width: 120,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        width: 160,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        width: 180,
      },
      '@media (min-width: 1225px)': {
        width: 200,
      },
    },
    space: {
      height: 1,
      width: 120,
      '@media (max-width: 479px)': {
        width: 15,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        width: 30,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        width: 80,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        width: 100,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        width: 110,
      },
    }
  },
  footer: {
    alignItems: "flex-end",
    color: variables.mint,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '0 10px 15px 10px',
    text: {
      textAlign: 'center',
      '@media (max-width: 479px)': {
        fontSize: 16,
        marginBottom: 30,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        fontSize: 20,
        marginBottom: 30,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        fontSize: 20,
        marginBottom: 30,
      },
      '@media (min-width: 1025px) and (max-width: 1224px)': {
        fontSize: 20,
        marginBottom: 30,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        fontSize: 20,
        marginBottom: 30,
      },
      '@media (min-width: 1462px)': {
        fontSize: 20,
        marginBottom: 30,
      },
    },
    arrow: {
      width: 60,
      marginBottom: 20,
      '@media (max-width: 479px)': {
        width: 40,
        marginBottom: 0,
      },
      '@media (max-width: 1225px)': {
          width: 50,
      }
    }
  },
  spacing: {
    flex: 'auto'
  },
}

import { variables } from '../../styles/variables';
const Background = '../../static/images/home/bacground.jpg';

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 479px)': {
      marginTop: 100,
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      marginTop: 100,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      marginTop: 100,
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      marginTop: 100,
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      marginTop: 120,
    },
    '@media (min-width: 1462px)': {
      marginTop: 150,
    },
  },
  title: {
    color: "white",
    margin: 0,
    fontFamily: "Roboto Light",
    fontWeight: 100,
    textAlign: 'center',
    '@media (max-width: 479px)': {
      fontSize: 35,
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize: 40,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 60,
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize: 75,
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize: 85,
    },
    '@media (min-width: 1462px)': {
      fontSize: 120,
    },
  },
  subTitle: {
    color: "white",
    fontFamily: "Roboto Light",
    margin: 0,
    textAlign: 'center',
    fontWeight: 100,
    '@media (max-width: 479px)': {
      fontSize: 16,
      marginTop: 15,
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize: 18,
      marginTop: 15,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 22,
      marginTop: 15,
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize: 26,
      marginTop: 10,
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize: 28,
      marginTop: 12,
    },
    '@media (min-width: 1462px)': {
      fontSize: 30,
      marginTop: 15,
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
        width: 140,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        width: 150,
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
        marginBottom: 20,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        fontSize: 20,
        marginBottom: 25,
      },
      '@media (min-width: 1462px)': {
        fontSize: 20,
        marginBottom: 30,
      },
    },
    arrow: {
      width: 60,
      '@media (max-width: 479px)': {
        width: 40,
        marginBottom: 0,
      },
      '@media (max-width: 1225px)': {
          marginBottom: 10,
          width: 40,
      },
      '@media (min-width: 1462px)': {
        fontSize: 20,
        marginBottom: 20,
      },
    }
  },
  spacing: {
    flex: 'auto'
  },
}

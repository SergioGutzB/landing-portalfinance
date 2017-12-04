import { variables } from '../../styles/variables';

const text = {
  color: 'white',
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 100,
  textAlign: 'center',
}

const padding = 80;

export const styles = {
  card: {
    paddingTop: padding,
    paddingBottom: padding,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    alignSelf: 'stretch',
    width: '50%',
    '@media (max-width: 490px)': {
      width: '100%',
    },
    title: {
      width: '100%',
      ...text,
      marginBottom: 40,
      lineHeight: 1,
      '@media (max-width: 490px)': {
        width: 'calc(100% - 10px)',
        fontSize: 30,
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
        width: 'calc(100% - 10px)',
        fontSize: 30,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        fontSize: 40,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        fontSize: 60,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        fontSize: 70,
      },
      '@media (min-width: 1462px) ': {
        width: '54%',
        fontSize: 70,
      },
    },
    text: {
      ...text,
      fontSize: '1rem',
      padding: '8px 20px',
      lineHeight: 1.4,
      fontWeight: 100,
      '@media (max-width: 490px)': {
        width: 'calc(100% - 40px)',
        fontSize: 14,
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
        width: 'calc(100% - 40px)',
        fontSize: 16,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        fontSize: 16,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        fontSize: 16,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        width: '70%',
        fontSize: 16,
      },
      '@media (min-width: 1462px) ': {
        width: '55%',
        fontSize: '1rem',
      },
    }
  }
}




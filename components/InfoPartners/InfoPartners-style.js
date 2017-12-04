import { variables } from '../../styles/variables';

const text = {
  //color: variables.text,
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  textAlign: 'center',
}

const margin = 170;

export const styles = {
  container: {
    background: variables.white,
    widht: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    padding: '0 0 70px'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    '@media (max-width: 490px)': {
      marginTop: margin - 70,
      marginBottom: margin - 70,
      width: 'calc(100% - 10px)',
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      marginTop: margin-50,
      marginBottom: margin-50,
      width: '90%',
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      marginTop: margin-30,
      marginBottom: margin-30,
      width: '80%',
    },
    '@media (min-width: 1025px) and (max-width: 1461px)': {
      marginTop: margin-20,
      marginBottom: margin-20,
      width: '70%',
    },
    '@media (min-width: 1462px) ': {
      marginTop: margin,
      marginBottom: margin,
      width: '70%',
    },
    title: {
      ...text,
      lineHeight: 1.1,
      fontWeight: 100,
      '@media (max-width: 490px)': {
        fontSize: 30,
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
        fontSize: 35,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        fontSize: 35,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        fontSize: 40,
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        fontSize: 45,
      },
      '@media (min-width: 1462px) ': {
        fontSize: 65,
      },
    },
    subtitle: {
      ...text,
      marginTop: 30,
      fontWeight: 100,
      lineHeight: 1.3,
      '@media (max-width: 490px)': {
        fontSize: 16,
        width: '80%',
        marginTop: 15,
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
        fontSize: 20,
        width: '80%',
        marginTop: 20,
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        fontSize: 24,
        width: '80%',
        marginTop: 20,
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
        fontSize: 24,
        width: '60%',
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        fontSize: 24,
        width: '60%',
      },
      '@media (min-width: 1462px) ': {
        fontSize: 30,
        width: '50%',
        marginTop: 30,
      },
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    flexWrap: 'wrap',
  }
}



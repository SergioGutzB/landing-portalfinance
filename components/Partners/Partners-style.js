import { variables } from '../../styles/variables';

const text = {
  color: variables.text,
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 500,
  textAlign: 'left',
  '@media (max-width: 490px)': {
    width: '90%',
  },
  '@media (min-width: 491px) and (max-width: 767px)': {
    width: '90%',
  },
  '@media (min-width: 768px) and (max-width: 1024px)': {
    width: '90%',
  },
  '@media (min-width: 1025px) and (max-width: 1225px)': {
    width: '90%',
  },
  '@media (min-width: 1225px) and (max-width: 1461px)': {
    width: '80%',
  },
  '@media (min-width: 1462px) ': {
    width: '75%',
  },
}

export const styles = {
  container: {
    background: variables.white,
    widht: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    paddingTop: 10,
    paddingBottom: 50,
  },
  partners: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    left: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 220,
      paddingRight: 50,
      width: '50%',
      '@media (max-width: 490px)': {
      },
      '@media (min-width: 491px) and (max-width: 767px)': {
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
      },
      '@media (min-width: 1025px) and (max-width: 1225px)': {
      },
      '@media (min-width: 1225px) and (max-width: 1461px)': {
        paddingLeft: 130,
      },
      '@media (min-width: 1462px) ': {
        paddingLeft: 220,
      },
    },
    right: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'center',
      width: '45%',
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 50,
      paddingRight: 50,
    },
    title: {
      ...text,
      fontWeight: 100,
      lineHeight: 1,
      fontSize: '2.2rem',
    },
    description: {
      ...text,
      textAlign: 'left',
      fontSize: '1rem',
    },
    button: {
      marginTop: 20,
    }
  }
}


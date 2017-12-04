import { variables } from '../../styles/variables';

const container = {
  paddingTop: 70,
  //paddingLeft: 45,
  //paddingRight: 45,
  paddingBottom: 60,
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  overflow: 'hidden',
  '@media (max-width: 490px)': {
    width: '100%',
  },
  '@media (min-width: 491px) and (max-width: 767px)': {
    width: '50%',
  },
  '@media (min-width: 768px) and (max-width: 1024px)': {
  },
  '@media (min-width: 1025px) and (max-width: 1225px)': {
  },
  '@media (min-width: 1225px) and (max-width: 1461px)': {
  },
  '@media (min-width: 1462px) ': {
  },
}

const text = {
  flex: 1,
  color: 'white',
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 500,
  textAlign: 'left',
  '@media (max-width: 490px)': {
    width: '95%',
    textAlign: 'center',
  },
  '@media (min-width: 491px) and (max-width: 767px)': {
    width: '70%',
  },
  '@media (min-width: 768px) and (max-width: 1024px)': {
    width: '70%',
  },
  '@media (min-width: 1025px) and (max-width: 1225px)': {
    width: '70%',
  },
  '@media (min-width: 1225px) and (max-width: 1461px)': {
    width: '70%',
  },
  '@media (min-width: 1462px) ': {
    width: '54%',
  },
}

export const styles = {
  card_info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    flexWrap: 'wrap',
    left: {
      ...container,
    },
    right: {
      ...container,
      '@media (max-width: 490px)': {
        display: 'none',
        width: 0,
        height: 0,
      },
    },
  },
  image: {
    maxHeight: 200,
    height: 'auto',
    width: 200,
    fill: 'white',
  },
  title: {
    ...text,
    fontSize: 70,
    lineHeight: 1,
    marginBottom: 30,
    '@media (max-width: 490px)': {
      fontSize: 45,
      textAlign: 'center',
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      fontSize: 40,
      textAlign: 'left',
      width: '70%',
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 50,
      textAlign: 'left',
      width: '70%',
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize: 60,
      textAlign: 'left',
      width: '70%',
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize: 70,
      textAlign: 'left',
      width: '70%',
    },
    '@media (min-width: 1462px) ': {
      fontSize: 70,
      textAlign: 'left',
      width: '54%',
    },
  },
  text: {
    ...text,
    fontSize: '1rem',
    lineHeight: 1.3,
    marginBottom: 15,
  }
}


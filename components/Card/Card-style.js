import { variables } from '../../styles/variables';

export const styles = {
  card: {
    margin: '0 25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 490px)': {
      width: '100%',
      padding: '5px 0',
      marginBottom: 30,
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      width: '100%',
      padding: '5px 0',
      marginBottom: 30,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      width: '26%',
      padding: '8px 0',
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      width: '28.111%',
      padding: '13px 0',
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      width: '28.111%',
      padding: '15px 0',
    },
    '@media (min-width: 1461px)': {
      width: '20%',
      padding: '20px 0',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0 20px',
    },
  },
  description:{
    fontWeight: 100,
    fontFamily: 'Roboto Light',
    minWidth: '18vw',
    '@media (max-width: 490px)': {
      fontSize: 14,
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      fontSize: 14,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 14,
    },
    '@media (min-width: 1025px) ': {
      fontSize: 16,
    },
  },
  name: {
    textAlign: 'left',
    flex: 'auto',
    fontSize: '2rem',
    fontWeight: 200,
    margin: 0,
  },
  image: {
    width: 125,
    height: 125,
    overflow: 'hidden',
    backgroundColor: "gray",
    borderRadius: '50%',
    marginBottom: 10,
    '@media (max-width: 490px)': {
      marginTop: 15,
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      marginTop: 10,
    },
    image: {
      width: '100%',
      maxHeight: '100%',
      height: 'auto',
    }
  },
  mail: {
    width: 30,
    height: 'auto',
    alignSelf: 'flex-end',
    marginTop: 10,
  }
}

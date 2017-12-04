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
    paddingTop: 10,
    paddingBottom: 50,
  },
  partners: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    left: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 50,
      paddingRight: 50,
      width: '50%',
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
      fontWeight: 100,
      lineHeight: 1,
      margin: 0,
      color: variables.text,
      fontSize: '2.2rem',
    },
    description: {
      textAlign: 'left',
      color: variables.text,
      marginTop: 5,
      marginBottom: 5,
      fontSize: '1rem',
    },
    button: {
      marginTop: 20,
    }
  }
}


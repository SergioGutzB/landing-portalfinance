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
    padding: '50px 0'
  },
  partners: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '30px 0',
    left: {
      padding: '50px',
      width: '50%',
    },
    right: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'center',
      width: '45%',
      padding: '30px 50px',
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
      margin: '5px 0',
    },
    button: {
      marginTop: 20,
    }
  }
}


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
    padding: '15px 0 70px'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    marginTop: margin,
    marginBottom: margin,
    width: '70%',
    title: {
      ...text,
      fontSize: 45,
      lineHeight: 1.2,
      fontWeight: 100,
    },
    subtitle: {
      ...text,
      marginTop: 30,
      width: '50%',
      fontWeight: 100,
      lineHeight: 1.3,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
  }
}



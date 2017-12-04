import { variables } from '../../styles/variables';

const text = {
  color: 'white',
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 100,
  width: '100%',
  textAlign: 'center',
}

const padding = 80;

export const styles = {
  card: {
    paddingTop: padding,
    paddingBottom: padding,
    paddingLeft: padding,
    paddingRight: padding,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    alignSelf: 'stretch',
    title: {
      ...text,
      fontSize: 50,
      marginBottom: 40,
      lineHeight: 1,
    },
    text: {
      ...text,
      fontSize: '1rem',
      padding: '0 20px',
      lineHeight: 1.4,
      fontWeight: 100,
    }
  }
}




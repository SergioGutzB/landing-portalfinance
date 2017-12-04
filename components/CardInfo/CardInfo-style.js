import { variables } from '../../styles/variables';

const container = {
  paddingTop: 70,
  paddingLeft: 45,
  paddingRight: 45,
  paddingBottom: 60,
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
}

const text = {
  flex: 1,
  width: '100%',
  color: 'white',
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 500,
  textAlign: 'left',
  lineHeight: 1,
}

export const styles = {
  card_info: {
    widht: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    left: {
      ...container,
    },
    right: {
      ...container,
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
  },
  text: {
    ...text,
    fontSize: '1rem',
    marginTop: 20,
  }
}


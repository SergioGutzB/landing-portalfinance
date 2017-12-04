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
  color: 'white',
  fontFamily: 'Roboto Light',
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 500,
  textAlign: 'left',
  '@media (max-width: 490px)': {
    width: '70%',
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
    width: '60%',
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
    lineHeight: 1,
    marginBottom: 30,
  },
  text: {
    ...text,
    fontSize: '1rem',
    lineHeight: 1.3,
    marginBottom: 15,
  }
}


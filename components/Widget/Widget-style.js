import { variables } from '../../styles/variables';

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignItems: 'center',
    margin: 20,
    fontSize: 14,
    '@media (max-width: 490px)': {
      width: '100%',
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      width: '39.2%',
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      width: '22.7%',
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      width: '20.5%',
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      width: '21.2%',
    },
    '@media (min-width: 1461px)': {
      width: '22.7%',
    },
  },
  icon_container: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    '@media (max-width: 490px)': {
      display: 'none',
    },
  },
  icon: {
    width: '100%',
    height: 'auto',
  },
  title:{
    textAlign: 'center',
    color: variables.ornflower_blue,
    fontFamily: 'Roboto Light',
    fontSize: '2rem',
    margin: 0,
    fontWeight: 100,
    lineHeight: 1,
  },
  text: {
    textAlign: 'center',
    color: variables.text_gray,
    fontFamily: 'Roboto Light',
    fontSize: '1rem',
    lineHeight: 1.3,
  }

}


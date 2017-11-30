import { variables } from '../../styles/variables';

export const styles = {
  container: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignItems: 'center',
    margin: 20,
    fontSize: 14
  },
  icon_container: {
    width: 100,
    height: 100,
    overflow: 'hidden',
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
    fontSize: '1em',
  }

}


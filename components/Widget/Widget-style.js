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
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  title:{
    textAlign: 'center',
    color: variables.ornflower_blue,
    fontFamily: 'Roboto Light',
    fontSize: '1em',
  },
  text: {
    textAlign: 'center',
    color: variables.text_gray,
    fontFamily: 'Roboto Light',
    fontSize: '1em',
  }

}


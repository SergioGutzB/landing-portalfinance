import { variables } from '../../styles/variables';
const Background = '../../static/images/foto1_fondos_1920x1098-01.jpg';

export const styles = {
  background: {
    flex: 1,
    height: 'calc(100vh)',
    overflow: 'hidden',
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    widht: '100%',
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "white",
    margin: 0,
    fontSize: '5em',
    fontFamily: "Roboto Light",
    fontWeight: 100,
  },
  subTitle: {
    color: "white",
    fontFamily: "Roboto Light",
    fontSize: '1.5em',
    fontWeight: 100,
    margin: 0,
  },
  buttoms: {
    width: '60%',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 400px)': {
      width: '100%'
    }
  },
  footer: {
    alignItems: "flex-end",
    color: variables.mint,
  },
  spacing: {
    flex: 'auto'
  },
}

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
    fontSize: '1.6em',
    fontWeight: 100,
    margin: 0,
  },
  buttoms: {
    marginTop: 15,
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}

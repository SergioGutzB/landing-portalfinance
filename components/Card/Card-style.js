import { variables } from '../../styles/variables';

export const styles = {
  card: {
    margin: '0 25px',
    width: '28.111%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0 20px',
    },
  },
  name: {
    textAlign: 'left',
    flex: 'auto',
    fontSize: '2rem',
    fontWeight: 200,
    margin: 0,
  },
  image: {
    width: 125,
    height: 125,
    overflow: 'hidden',
    backgroundColor: "gray",
    borderRadius: '50%',
    marginBottom: 10,
    image: {
      width: '100%',
      maxHeight: '100%',
      height: 'auto',
    }
  },
  mail: {
    width: 30,
    height: 'auto',
    alignSelf: 'flex-end',
    marginTop: 10,
  }
}

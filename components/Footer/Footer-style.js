import { variables } from '../../styles/variables';

let container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
    alignContent: "center",
}

export const styles = {
  footer: {
    background: variables.navy_blue,
    height: 60,
    widht: '100%',
    padding: '10px 30px',
    color: 'white',
    alignItems: "center",
    alignContent: "center",
    ...container,
  },
  left: {
    ...container,
    flex: 'flex-start'
  },
  right: {
    ...container,
    flex: 'flex-end'
  },
  copyright: {
    margin: 0,
  }


}

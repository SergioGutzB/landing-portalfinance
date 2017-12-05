import { variables } from '../../styles/variables';

let container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignContent: "center",
}

export const styles = {
  footer: {
    background: variables.dark_blue,
    height: 20,
    widht: '100%',
    padding: '20px 30px',
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
  },
  center:{
    display: "flex",
    flexDirection: "row",
    flex:'center',
    justifyContent: "center",
  }


}

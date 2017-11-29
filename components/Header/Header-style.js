import { variables } from '../../styles/variables';

export const styles = {
  container: {
    background: variables.navy_blue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: 60,
    padding: "10px 30px",
    maxHeight: 60,
  },
  logo: {
    height: 50,
    widht: "auto"
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    listStyleType: "none",
    item: {
      color: "white",
      fontFamily: "helvetica",
      padding: "0px 0 0 20px",
      fontSize: 14
    }
  },
}

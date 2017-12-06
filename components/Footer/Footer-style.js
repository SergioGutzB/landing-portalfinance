import { variables } from '../../styles/variables';

let container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: 'center',
  alignContent: "center",
}

export const styles = {
  footer: {
    background: variables.navy_blue,
    height: 20,
    widht: '100%',
    padding: '20px 45px',
    color: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
    borderTopStyle: 'solid',
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
    padding: 0,
    fontSize: 13,
  },
  social: {
    flex: 'flex-end',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  element_social:{
    display: "flex",
    flexDirection: "row",
    padding: "0px 10px",
    height: "60px",
    justifyContent: "center",
  },
  icon:{
    width: 10,
    height: "auto",
    AlignSelf: "flex-end",
    marginTop: "10px",
    justifyContent: "space-between"
  },
  social_icon:{
    width: 35,
    height: "auto",
    AlignSelf: "flex-end",
    marginTop: "10px",
    justifyContent: "center",
  },


}

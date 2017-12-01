
export const styles = {
  container: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "5px 0px",
    paddingTop: 12,
    paddingBottom: 12,
    '@media (max-width: 479px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
    '@media (min-width: 768px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
   },
   label: {
    color: "white",
    margin: 0,
    fontSize: '1em',
    fontFamily: "Roboto Bold",
    whiteSpace: 'nowrap',
   },
}


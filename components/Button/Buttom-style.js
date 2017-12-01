
export const styles = {
  container: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "12px 40px",
    margin: "5px 0px",
    '@media (max-width: 479px)': {
      padding: "12px 20px",
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      padding: "12px 30px",
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      padding: "12px 40px",
    },
    '@media (min-width: 1025px) and (max-width: 1224px)': {
      padding: "12px 40px",
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      padding: "12px 40px",
    },
    '@media (min-width: 1462px)': {
      padding: "12px 40px",
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


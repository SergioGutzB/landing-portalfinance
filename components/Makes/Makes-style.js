import { variables } from '../../styles/variables';

export const styles = {
  container: {
    background: variables.white,
    widht: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    padding: '100px 0 15px'
  },
  title_container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alingContent: 'center',
    padding: '0 15% 0',
    fontFamily:"Roboto Light",
    textAlign:"center",
    lineHeight: 1,
    '@media (max-width: 479px)': {
      padding: '0 20px 0',
    },
  },
  title: {
    margin: 0,
    color: variables.text,
    '@media (max-width: 479px)': {
      fontSize:"1.2rem",
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize:"2rem",
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize:"2.2rem",
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize:"2.2rem",
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize:"2.8rem",
    },
    '@media (min-width: 1461px)': {
      fontSize:"3rem",
    },
  },
  subtitle:{
    padding: "0 12%",
    margin: '10px',
    fontFamily:"Roboto Light",
    color:variables.text_gray,
    '@media (max-width: 479px)': {
      fontSize:".9rem",
      padding: "0 0%",
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      fontSize:"1rem",
      padding: "0 5%",
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize:"1rem",
      padding: "0 8%",
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      fontSize:"1rem",
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      fontSize:"1.2rem",
    },
    '@media (min-width: 1461px)': {
      fontSize:"1.4rem",
    },
  },
  content: {
    width: '100%',
    '@media (min-width: 1461px)': {
      width: '88%',
    },
  },
  widget_container:{
    padding: '0px 60px',
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: 'wrap',
    marginTop: 40,
    widget: {
      width: '28%',
      background: 'red',
    }
  },
}


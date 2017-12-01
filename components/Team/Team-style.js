import { variables } from '../../styles/variables';

export const styles = {
  team: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '30px 0',
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 490px)': {
      padding: '0px',
    },
    '@media (min-width: 491px) and (max-width: 767px)': {
      padding: '0 10px',
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      padding: '0 15px',
    },
    '@media (min-width: 1025px) and (max-width: 1225px)': {
      padding: '0 30px',
    },
    '@media (min-width: 1225px) and (max-width: 1461px)': {
      padding: '0 50px',
    },
    '@media (min-width: 1461px)': {
      padding: '0 150px',
    },
  }
}

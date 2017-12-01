import React from 'react';
import { styles } from './Team-style';
import Card from '../Card/Card';
import Radium from 'radium';

class Team extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div style={styles.team}>
        <div style={styles.cards}>
          <Card
            first_name="Diego"
            last_name="Caicedo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image='../../static/images/team/diego_caicedo.png'
          />
          <Card
            first_name="Charles"
            last_name="Cliff"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            contrast={true}
            image='../../static/images/team/charles-cliff.png'
          />
          <Card
            first_name="Felipe"
            last_name="Puntarelli"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image='../../static/images/team/felipe_puntarelli.png'
          />
        </div>
      </div>
    )
  }
}

export default Radium(Team);

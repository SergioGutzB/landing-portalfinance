import React from 'react';
import { styles } from './Team-style';
import Card from '../Card/Card';
import Radium from 'radium';

class Team extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const user = 'https://cdn3.iconfinder.com/data/icons/faticons/32/user-01-256.png'
    return (
      <div style={styles.team}>
        <div style={styles.cards}>
          <Card
            first_name="Diego"
            last_name="Caicedo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={user}
          />
          <Card
            first_name="Diego"
            last_name="Caicedo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            contrast={true}
            image={user}
          />
          <Card
            first_name="Diego"
            last_name="Caicedo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image={user}
          />
        </div>
      </div>
    )
  }
}

export default Radium(Team);

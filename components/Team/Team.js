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
            description=""
            image='../../static/images/team/diego_caicedo.png'
            link='dcaicedo@portalfinance.co'
          />
          <Card
            first_name="Charles"
            last_name="Cliff"
            description=""
            contrast={true}
            image='../../static/images/team/charles-cliff.png'
            link='ccliff@portalfinance.co'
          />
          <Card
            first_name="Felipe"
            last_name="Puntarelli"
            description=""
            image='../../static/images/team/felipe_puntarelli.png'
            link='fpuntareli@portalfinance.co'
          />
        </div>
      </div>
    )
  }
}

export default Radium(Team);

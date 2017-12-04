import React from 'react';
import {styles} from './Partners-style.js';
import Radium from 'radium';
import Buttom from '../Button/Buttom';
import { variables } from '../../styles/variables';

class Partners extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render () {

    return (
      <div style={styles.container}>

        <div style={styles.partners}>
          <div style={styles.partners.left}>
            <h1 style={styles.partners.title}>The IFC -World Bank estimates SMES in developing countries face an estimated financing gap of $2.1 to $2.6 trillon. </h1>
          </div>
          <div style={styles.partners.right}>
            <p style={styles.partners.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p style={styles.partners.description}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Buttom
              style={styles.partners.button}
              color="transparent"
              textColor={variables.light_blue}
              border={true}
              borderColor={variables.light_blue}
              action={this.props.actions.gotoInfoPartners}
            >LEARN MORE</Buttom>
          </div>
        </div>

      </div>
    )
  }
}

export default Radium(Partners);


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
            <p style={styles.partners.description}>Today’s supply chains carry an unprecedented complexity, understanding the role of any given company in the vast interconnected network that is every supply chain.</p>
            <p style={styles.partners.description}>We use machine learning and graph theory to aggregate all available data, our current model is spanning into the millions of nodes and edges.</p>
            <p style={styles.partners.description}>We monitor employment, formality, clients, taxes, asset purchases, suppliers and more.</p>
            <p style={styles.partners.description}>We provide financial institutions with the ability to drill down and understand our score cards to better take the decisions.</p>
            <Buttom
              style={styles.partners.buttom}
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


import React from 'react';
import Head from 'next/head';
import { styles } from './Home-style';
import Buttom from '../Button/Buttom';
import Radium from 'radium';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div style={styles.background}>
        <span style={styles.spacing}></span>
        <div style={styles.center}>
          <h1 style={styles.title}>Transforming Mission</h1>
          <h1 style={styles.title}>Critical Finance</h1>
          <h4 style={styles.subTitle}>Body copu here</h4>
          <div style={styles.buttoms}>
            <Buttom label="WHAT WE DO" />
            <Buttom label="PARTNERS" border={true} borderColor="white" color="transparent"/>
          </div>
        </div>
        <span style={styles.spacing}></span>
        <div style={styles.footer} >
          <p>Scroll down to see how Portal Finance makes  a difference</p>
        </div>
      </div>
    )
  }
}

export default Radium(Home);

import React from 'react';
import Head from 'next/head';
import { styles } from './Home-style';
import Buttom from '../Button/Buttom';

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div style={styles.background}>
        <h1 style={styles.title}>Transforming Mission</h1>
        <h1 style={styles.title}>Critical Finance</h1>
        <h4 style={styles.subTitle}>Body copu here</h4>
        <div style={styles.buttoms}>
          <Buttom label="WHAT WE DO" />
          <Buttom label="PARTNERS" border={true} borderColor="white" color="transparent"/>
        </div>
      </div>
    )
  }
}


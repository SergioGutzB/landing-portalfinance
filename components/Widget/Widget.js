import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'
import global from '../../styles/global.scss';
import { styles } from './Widget-style';

export default class Widget extends React.Component {

  render(){
    const {icon, title, text} = this.props;

    return (
      <div style={styles.container} >
        <img src={icon} style={styles.icon} />
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{text}</p>
      </div>
    )
  }

}


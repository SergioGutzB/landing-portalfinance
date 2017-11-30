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
        <div style={styles.icon_container}>
          <img src="https://www.stickyminds.com/sites/default/files/article/2017/api-testing.png" style={styles.icon} />
        </div>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{text}</p>
      </div>
    )
  }

}


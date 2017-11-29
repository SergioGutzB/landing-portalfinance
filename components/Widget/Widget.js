import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'
import global from '../../styles/global.scss';
import { styles } from './Widget-style';

export default class Widget extends React.Component {

    constructor(props, context) {
        super(props, context);
      }

    render(){

        return (
            <div style={styles.container}>
                <div style={styles.title}>
                    
                </div>
            </div>
        )

    }

}
    
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'
import global from '../../styles/global.scss';
import {styles} from './Wwd-style';
import Widget from '../Widget/Widget';

export default class Wwd extends React.Component {


    constructor(props, context) {
        super(props, context);
      }

      render () {
           const array_w = [{ "id":"1","title":"Process Automation","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
            ,{ "id":"2","title":"Risk Management", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
            ,{ "id":"3","title":"Customer Acquisition","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
            ,{ "id":"4","title":"Accountability & Traceability","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
        ];
        return (
            <div style={styles.container}>
                <div style={styles.title_container}>
                    <h1 style={styles.title}>Electronic Invoicing generates a plethora of information, but making sence of this information is a challenge.</h1>
                    <h3 style={styles.subtitle}>At Portal Finance, we provide the tools to understand and use this information to support key financing decisions.</h3>
                </div>
                <div style={styles.widget_container}>{
                    array_w.map(w=>
                        <Widget title={w.title} text={w.text} /> )
                    }
                </div>
            </div>
        )
      }
}    
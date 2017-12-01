import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Head from 'next/head'
import global from '../../styles/global.scss';
import {styles} from './Wwd-style';
import Radium from 'radium';
import Widget from '../Widget/Widget';
import Buttom from '../Button/Buttom';
import { variables } from '../../styles/variables';

const setting = '../../static/images/search.png';
const safeMoney = '../../static/images/setting.png';
const customer = '../../static/images/customer.png';
const search = '../../static/images/search.png';

class Wwd extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render () {
    const array_w = [{ "id":"1","image": setting, "title":"Process Automation","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
      ,{ "id":"2","image": safeMoney, "title":"Risk Management", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      ,{ "id":"3","image": customer, "title":"Customer Acquisition","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
      ,{ "id":"4","image": search, "title":"Accountability & Traceability","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    const style = this.props.style? this.props.style : {}

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.title_container}>
          <h1 style={styles.title}>Electronic Invoicing generates a plethora of information, but making sense of this information is a challenge.</h1>
          <h3 style={styles.subtitle}>At Portal Finance, we provide the tools to understand and use this information to support key financing decisions.</h3>
        </div>

        <div style={styles.content}>
          <div style={styles.widget_container}>{
            array_w.map(w =>
              <Widget style={styles.widget_container.widget} title={w.title} text={w.text} icon={w.image}/> )
            }
          </div>
        </div>

        {/*
        <div style={styles.wwd}>
          <div style={styles.wwd.content}>
            <div style={styles.wwd.content.box}>
              <h1 style={styles.wwd.content.title}>What we do</h1>
              <h1 style={styles.wwd.content.title}>at Portal Finance</h1>
              <h4 style={styles.wwd.content.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
              <Buttom style={styles.wwd.content.button} color="transparent" border={true} borderColor="white" >LEARM MORRE</Buttom>
            </div>
          </div>
          <div style={styles.wwd.image}>
            <img style={styles.wwd.image.image} src="http://www.www8-hp.com/sa/en/images/overview_hero_tcm_173_1302368.png" />
          </div>
        </div>

        <div style={styles.section2}>
          <div style={styles.section2.left}>
            <h1 style={styles.section2.title}>The IFC -World Bank estimates SMES in developing countries face an estimated financing gap of $2.1 to $2.6 trillon. </h1>
          </div>
          <div style={styles.section2.right}>
            <p style={styles.section2.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p style={styles.section2.description}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Buttom
              style={styles.section2.button}
              color="transparent"
              textColor={variables.light_blue}
              border={true}
              borderColor={variables.light_blue}
            >LEARM MORRE</Buttom>
          </div>
        </div>
          */}

      </div>
    )
  }
}

export default Radium(Wwd);

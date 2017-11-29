import React from 'react';
import Head from 'next/head'
import { styles } from './Buttom-style.js';
import { variables } from '../../styles/variables';
import TouchableHighlight from '../TouchableHighlight/TouchableHighlight';

export default class Buttom extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { label, color, border, borderColor, textColor} = this.props;
    const labelStyle = this.props.labelStyle? this.props.labelStyle : {};
    const style = this.props.style? this.props.style : {};


    const styleButton = {
      backgroundColor: color? color : variables.mint,
      border: "2px solid",
      borderColor: borderColor? borderColor : color? color : "transparent",
      text: textColor? textColor:  "white",
    }

    return (
      <TouchableHighlight>
        <div style={Object.assign({}, styles.container, styleButton, style)}>
          <p style={Object.assign({}, styles.label, labelStyle) }>{label}</p>
        </div>
      </TouchableHighlight>
    )
  }
}

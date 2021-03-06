import React from 'react';
import Head from 'next/head'
import { styles } from './Buttom-style.js';
import { variables } from '../../styles/variables';
import TouchableHighlight from '../TouchableHighlight/TouchableHighlight';
import Radium from 'radium';

class Buttom extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { color, border, borderColor, textColor, action} = this.props;
    const labelStyle = this.props.labelStyle? this.props.labelStyle : {};
    const style = this.props.style? this.props.style : {};

    const styleButton = {
      background: color? color : variables.mint,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: borderColor? borderColor : color? color : "transparent",
      color: textColor? textColor:  "white",
    }

    return (
      <TouchableHighlight>
        <button style={Object.assign({}, styles.container, styleButton, style)} onClick={() => action()}>
          <p style={Object.assign({}, styles.label, labelStyle, {color: styleButton.color}) }>{this.props.children}</p>
        </button>
      </TouchableHighlight>
    )
  }
}

export default Radium(Buttom);

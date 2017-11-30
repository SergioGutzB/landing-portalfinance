import React from 'react';
import { Motion, spring } from 'react-motion';
import injectTapEventPlugin from 'react-tap-event-plugin';

const springConfig = {stiffness: 170, damping: 26};

const style = {
  cursor: "pointer",
}

export default class TouchableHighlight extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      hover: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({hover: true})
  }

  handleMouseLeave = () => {
    this.setState({hover: false})
  }

  render () {
    const { hover } = this.state;
    const { children } = this.props;

    const styleHover = {
      opacity: spring(hover? .7 : 1, springConfig),
    }

    return (
    <div>
    <Motion style={styleHover}>
      {({opacity}) =>
        <div onMouseEnter={() => this.handleMouseEnter()} style={Object.assign({}, style, {opacity: opacity})} onMouseLeave={() => this.handleMouseLeave()}>
          { children }
        </div>
      }
    </Motion>
    </div>
    )
  }
}


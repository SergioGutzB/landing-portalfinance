import React from 'react';
import { styles } from './Card-style';
import { variables } from '../../styles/variables';
import Mail from '../../static/images/email2.svg';
import Radium from 'radium';
import TouchableHighlight from '../TouchableHighlight/TouchableHighlight';

class Card extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { image, first_name, last_name, description, link, contrast } = this.props;
    const style = {
      background: contrast? variables.light_blue : "white",
      color: contrast? "white" : variables.text,
    }
    const mail_style = {
      fill: contrast? "white" : variables.text,
    }


    return (
      <div style={Object.assign({}, styles.card, style)}>
        <div style={styles.card.container}>
          <div style={styles.image}>
            <img style={styles.image.image} src={image} />
          </div>
          <h3 style={styles.name}>{first_name}</h3>
          <h3 style={styles.name}>{last_name}</h3>
          <p style={styles.description}>{description}</p>
          <a style={styles.link} href={"mailto:"+link} target="_top">
            <TouchableHighlight>
              <Mail style={Object.assign({}, styles.mail, mail_style)} />
            </TouchableHighlight>
          </a>
        </div>
      </div>
    )
  }
}

export default Radium(Card);

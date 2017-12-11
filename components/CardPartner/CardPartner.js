import {styles} from './CardPartner-style.js';
import Radium from 'radium';
import { variables } from '../../styles/variables';

class CardPartner extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const {title, text, color, email} = this.props;

    const style = {
      backgroundColor: color? color : "white",
    }

    return (
     <div style={Object.assign({}, styles.card, style)}>
       <h1 style={styles.card.title}>{title}</h1>
       {text? text.map((t, index) =>
         <p style={styles.card.text} key={index}>{t}</p>
       ): null}
       <a style={styles.email} href={'mailto:'+email} >{email}</a>
     </div>
    )
  }
}

export default Radium(CardPartner);

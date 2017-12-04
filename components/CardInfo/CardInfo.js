import {styles} from './CardInfo-style';
import Radium from 'radium';
import { variables } from '../../styles/variables';

class CardInfo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render () {
    const { Image, title, text, orientation, color } = this.props;

    const style = {
      backgroundColor: color? color : variables.dark_blue,
      flexDirection: (orientation === 'left')? 'row' : 'row-reverse',
    }

    return (
      <div style={Object.assign({}, styles.card_info, style)}>
        <div style={styles.card_info.left}>
          <h1 style={styles.title}>{title}</h1>
          {text? text.map(t =>
            <p style={styles.text}>{t}</p>
          ): null}
        </div>
        <div style={styles.card_info.right}>
          <Image style={styles.image} />
        </div>
      </div>
    )
  }
}

export default Radium(CardInfo);


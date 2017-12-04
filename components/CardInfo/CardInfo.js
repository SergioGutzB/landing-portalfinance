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
    const { image, title, text, orientation, color } = this.props;

    const style = {
      backgroundColor: color? color : variables.dark_blue,
      left: {
        flex: (orientation === 'left')? 'flex-start' : 'flex-end',
      },
      right: {
        flex: (orientation === 'right')? 'flex-end' : 'flex-start',
      }
    }

    return (
      <div style={Object.assign({}, styles.card_info, style)}>
        <div style={Object.assign({}, styles.card_info.left, style.left)}>
          <h1 style={styles.title}>{title}</h1>
          <p style={style.text}>{text}</p>
        </div>
        <div style={Object.assign({}, styles.card_info.right, style.right)}>
          <img style={styles.image} src={image} />
        </div>
      </div>
    )
  }
}

export default Radium(CardInfo);


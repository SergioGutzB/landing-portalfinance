import {styles} from './InfoWwd-style';
import Radium from 'radium';
import Widget from '../Widget/Widget';
import Buttom from '../Button/Buttom';
import { variables } from '../../styles/variables';
import CardInfo from '../CardInfo/CardInfo';

const setting = '../../static/images/search.png';
const safeMoney = '../../static/images/setting.png';
const customer = '../../static/images/customer.png';
const search = '../../static/images/search.png';

class InfoWwd extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render () {
    const array_info = [
      {
        id: 1,
        image: setting,
        title: "Process Automation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        orientation: 'left',
        color: 'red',
      }
    ];

    return (
      <div style={styles.container}>
        {array_info.map(info =>
          <CardInfo image={info.image} title={info.title} text={info.text} orientation={info.orientation} key={info.id} color={info.color}/>
        )}

      </div>
    )
  }
}

export default Radium(InfoWwd);


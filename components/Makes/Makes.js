import {styles} from './Makes-style';
import Radium from 'radium';
import Widget from '../Widget/Widget';
import Buttom from '../Button/Buttom';
import { variables } from '../../styles/variables';

const setting = '../../static/images/search.png';
const safeMoney = '../../static/images/setting.png';
const customer = '../../static/images/customer.png';
const search = '../../static/images/search.png';

class Makes extends React.Component {

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
              <Widget style={styles.widget_container.widget} title={w.title} text={w.text} icon={w.image} key={w.id}/> )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Makes);


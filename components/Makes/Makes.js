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
    const array_w = [{ "id":"1","image": setting, "title":"Process Automation","text":"We focus on automating the key processes for financial institutions to help them scale their current factoring and confirming operations without scaling their operational costs. By providing an automated approach to customer onboarding using digital contracts, to automated debtor approval of invoices."}
      ,{ "id":"2","image": safeMoney, "title":"Risk Management", "text":"We Manage your Risk Exposure.Our model uses advanced algorithms based on the invoicing patterns of each economic sector. We monitor not only invoicing but also purchases, tax ledgers, payrolls, asset purchases as well as financing behaviour to assess an opportunity."}
      ,{ "id":"3","image": customer, "title":"Customer Acquisition","text":"We help you leverage your Relationships. Automated onboarding, Debtor Lead Programs and API’s allow us to create multiple acquisition channels for financial institutions to scale their operations while drastically reducing their customer acquisition cost."}
      ,{ "id":"4","image": search, "title":"Accountability & Traceability","text":"Every Transaction is auditable on the spot." }
    ];

    const style = this.props.style? this.props.style : {}

    return (
      <div style={Object.assign({}, styles.container, style)}>
        <div style={styles.title_container}>
          <h1 style={styles.title}>Electronic Invoicing generates a plethora of information, but making sense of this information is a challenge.</h1>
          <h3 style={styles.subtitle}>Portal Finance provides the tools to understand and leverage this information to transform how mission critical finance decisions are made.</h3>
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


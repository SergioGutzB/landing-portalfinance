import {styles} from './InfoWwd-style';
import Radium from 'radium';
import { variables } from '../../styles/variables';
import CardInfo from '../CardInfo/CardInfo';

import Api from '../../static/images/InfoWwd/Apis.svg';
import Business from '../../static/images/InfoWwd/business.svg';
import Made from '../../static/images/InfoWwd/made.svg';
import Generation from '../../static/images/InfoWwd/generation.svg';


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
        Image: Api,
        title: "Apis",
        text: [
          "We provide APIs that process eInvoices (group, qualify, offer, purchase, predict discount rates, etc...) based on the a proprietary algorithm that determines the quality of an invoice in real time.",
          "We process over 500.000 invoices per day and are quickly expanding."
        ],
        orientation: 'left',
        color: variables.dark_blue,
      },
      {
        id: 2,
        Image: Business,
        title: "Business Intelligence",
        text: [
          "Making sense of large sets of data to analyze and design risk and pricing strategies requires developing proprietary dashboards and reporting tools so decision makers can understand and leverage the data to fine tune their strategies."
        ],
        orientation: 'right',
        color: variables.cyan,
      },
      {
        id: 3,
        Image: Generation,
        title: "LEAD GENERATION",
        text: [
          "We partner with E-Invoice providers looking to connect their clients with Financiers providing invoice classification and business intelligence solutions easing the deployment of invoice financing services."
        ],
        orientation: 'left',
        color: variables.light_blue,
      },
      {
        id: 4,
        Image: Made,
        title: "TAILOR MADE SOLUTIONS",
        text: [
          "We develop custom solutions for financial partners or eInvoice networks that are looking for turn key solutions that leverage our APIs and know-how to develop world class solutions that add real value.",
        ],
        orientation: 'right',
        color: variables.jade,
      }
    ];

    return (
      <div style={styles.container}>
        {array_info.map(info =>
          <CardInfo Image={info.Image} title={info.title} text={info.text} orientation={info.orientation} key={info.id} color={info.color}/>
        )}

      </div>
    )
  }
}

export default Radium(InfoWwd);


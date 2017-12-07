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
          "We provide APIs that allow financial institutions to tightly integrate our technology into their current stacks and operating systems.",
          "Our micro service architecture allows us to integrate into existing workflows, improving, automating and adding value where we can throughout the process flow.",
        ],
        orientation: 'left',
        color: variables.dark_blue,
      },
      {
        id: 2,
        Image: Business,
        title: "Business Intelligence",
        text: [
          "Our proprietary reporting system based off of our risk and data aggregation systems allows users to see all relevant information, we create snapshots of the information available at the exact moment that decisions were taken"
        ],
        orientation: 'right',
        color: variables.cyan,
      },
      {
        id: 3,
        Image: Generation,
        title: "Sales Engine",
        text: [
          "With a better understanding of the company Portal Finance provides financial executives with the insights to better serve their customer base by providing offers based on dynamic pricing to the entire invoice stock of the customer."
        ],
        orientation: 'left',
        color: variables.light_blue,
      },
      {
        id: 4,
        Image: Made,
        title: "TAILOR MADE SOLUTIONS",
        text: [
          "Our micro services architecture allows us to provide Financial Institutions with tailor made world class solutions that integrate or as stand alones for improving and adding value to their current workflows.",
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


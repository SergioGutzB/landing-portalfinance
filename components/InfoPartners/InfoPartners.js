import {styles} from './InfoPartners-style.js';
import Radium from 'radium';
import { variables } from '../../styles/variables';
import CardPartner from '../CardPartner/CardPartner';

class InfoPartners extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render () {

    const title = ["At Portal Finance we are looking to expand become a Portal Finance Partner"]
    //const subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const subtitle = ""

    const partners = [
      {
        title: "INVOICE ORIGINATORS",
        text: [
          "If you are are a provider of e-Invoicing in any form ERP, Invoicing, Accounting or any other B2B focused application looking to integrate and provide in app financing not only providing your users with a real and tangible added value but also generating a new revenue stream for your company.",
          //"If you have not yet integrated an e-Invoicing solution we can guide you through the process in any of the 10 Latin American Countries though our partnership with Gosocket (www.gosocket.net).",
          "If you would like to know more reach out to partners@portalfinance.co"
        ],
        color: variables.light_blue,
      },
      {
        title: "FINANCIAL INSTITUTIONS",
        text: [
          "If you are a bank or commercial factoring looking to integrate and leverage out solutions to compliment your current factoring operations reach out to partners@portalfinance.co. We will sit down and understand your goals and support you through the entire design - development - deployment process.",
          "Looking for a complete turn key solution that will integrate into your current corporate stack, reach out directly to dcaicedo@portalfinance.co"
        ],
        color: variables.jade,
      }
    ]

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.header.title}>{title[0]}</h1>
          <h1 style={styles.header.title}>{title[1]}</h1>
          <h3 style={styles.header.subtitle}>{subtitle}</h3>
        </div>
        <div style={styles.content}>
          {partners.map((p, index) =>
              <CardPartner key={index} title={p.title} text={p.text} color={p.color}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default Radium(InfoPartners);


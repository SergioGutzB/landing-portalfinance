import { styles } from './Contact-style';
import Radium from 'radium';
import { variables } from '../../styles/variables';
import Mail from '../../static/images/email2.svg'
import Location from '../../static/images/usa_location.svg';
import Colombia from '../../static/images/colombia.svg';
import Mexico from '../../static/images/mexico.svg';
import Chile from '../../static/images/chile.svg';
import Usa from '../../static/images/united-states.svg';
import Phone from '../../static/images/phone-call.svg';


const contact = () => {
  return (
    <div style={styles.content}>
      <div style={styles.contact}>
        <div style={styles.title}>CONTACT US</div>
        {phoneIcon("401 Charmany Dr Madison, Wi ,53719", <Location style={styles.icon} />, null)}
        {phoneIcon("dcaicedo@portalfinance.co", <Mail style={styles.icon} />, null)}
      </div>
      <div style={styles.contact}>·
        {phoneIcon("(510) 757-9431", <Usa style={styles.flag_icon} />)}
        {phoneIcon("+5713571162", <Colombia style={styles.flag_icon} />)}
        {phoneIcon("+525536877136", <Mexico style={styles.flag_icon} />)}
        {phoneIcon("+56226665884", <Chile style={styles.flag_icon} />)}
      </div>
      <div style={styles.map}>
        <img src="../../static/images/mapa2.png" style={{height: 190, width: 'auto'}}/>
      </div>
    </div>
  );
}

const phoneIcon = (text, flag = null, icon=<Phone style={styles.icon}/>) => {
  return (
    <div style={styles.element}>
      <div style={styles.icon_area}>
        {icon}
        {flag}
      </div>
      <div style={styles.text}>{text}</div>
    </div>
  )
}

export default Radium(contact);

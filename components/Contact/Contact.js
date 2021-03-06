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
        {phoneIcon("dcaicedo@portalfinance.co", <Mail style={styles.icon} />, null, true)}
      </div>
      <div style={styles.contact}>·
        {phoneIcon("+1 (510) 757-9431", <Usa style={styles.flag_icon} />)}
        {phoneIcon("+57 (1) 357-1162", <Colombia style={styles.flag_icon} />)}
        {phoneIcon("+52 (553) 687-7136", <Mexico style={styles.flag_icon} />)}
        {phoneIcon("+56 (2) 2666-5884", <Chile style={styles.flag_icon} />)}
      </div>
      <div style={styles.map}>
        <img src="../../static/images/mapa2.png" style={{height: 190, width: 'auto'}}/>
      </div>
    </div>
  );
}

const phoneIcon = (text, flag = null, icon=<Phone style={styles.icon}/>, link = false) => {
  return (
    <div style={styles.element}>
      <div style={styles.icon_area}>
        {icon}
        {flag}
      </div>
      {link?
      <div style={styles.text}><a style={styles.link} href={"malto:"+text}>{text}</a></div>
      : <div style={styles.text}>{text}</div>
      }
    </div>
  )
}

export default Radium(contact);

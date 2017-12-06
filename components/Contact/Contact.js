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


class Contact extends React.Component{

  constructor(props, context) {
    super(props, context);
  }

  render(){

    const mail_style = {
        fill: "white"
    }

    return (
        <div style={styles.content}>
            <div style={styles.contact}>
                <div style={styles.title}>CONTACT US</div>
                <div style={styles.element}>
                    <div style={styles.icon_area}>
                        <Location style={Object.assign({}, styles.icon, mail_style)} />
                    </div>
                    <div style={styles.text}>
                    401 Charmany Dr Madison, Wi ,53719
                    </div>
                </div>
                <div style={styles.element}>
                    <div style={styles.icon_area}>
                        <Mail style={Object.assign({}, styles.icon, mail_style)} />
                    </div>
                    <div style={styles.text}>
                    dcaicedo@portalfinance.co
                    </div>
                </div>
                <div style={styles.element}>
                    <div style={styles.icon_area}>
                        <Phone style={Object.assign({}, styles.icon, mail_style)} />
                        <Usa style={Object.assign({}, styles.flag_icon, mail_style)} />
                    </div>
                    <div style={styles.text}>
                    (510) 757-9431
                    </div>
                </div>
                <div style={styles.element}>
                    <div style={styles.icon_area}>
                        <Phone style={Object.assign({}, styles.icon, mail_style)} />
                        <Colombia style={Object.assign({}, styles.flag_icon, mail_style)} />
                    </div>
                    <div style={styles.text}>
                    +5713571162
                    </div>
                </div>
                <div style={styles.element}>
                    <div style={styles.icon_area}>
                        <Phone style={Object.assign({}, styles.icon, mail_style)} />
                        <Mexico style={Object.assign({}, styles.flag_icon, mail_style)} />
                    </div>
                    <div style={styles.text}>
                    +525536877136
                    </div>
                </div>
                <div style={styles.element}>
                    <div style={styles.icon_area}>
                        <Phone style={Object.assign({}, styles.icon, mail_style)} />
                        <Chile style={Object.assign({}, styles.flag_icon, mail_style)} />
                    </div>
                    <div style={styles.text}>
                    +56226665884
                    </div>
                </div>
            </div>
            <img src="../../static/images/mapa2.png" style={{height: 190, width: 'auto', marginLeft: -200}}/>
        </div>
    );

  }
}

export default Radium(Contact);

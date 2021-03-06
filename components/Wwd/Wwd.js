import {styles} from './Wwd-style';
import Radium from 'radium';
import Widget from '../Widget/Widget';
import Buttom from '../Button/Buttom';
import { variables } from '../../styles/variables';

const setting = '../../static/images/search.png';
const safeMoney = '../../static/images/setting.png';
const customer = '../../static/images/customer.png';
const search = '../../static/images/search.png';

class Wwd extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      height: 0
    }
  }

  componentDidMount () {
    let { clientHeight} = this.refs.wwdRef;
    this.setState({height: clientHeight})
  }

  render () {

    const style = this.props.style? this.props.style : {}
    const image_syle = {
      height: this.state.height + 100,
      width: 'auto',
      maxWidth: '50%',
    }

    return (
      <div style={Object.assign({}, styles.container, style)}>

        <div style={styles.wwd} ref="wwdRef">
          <div style={styles.wwd.content}>
            <div style={styles.wwd.content.box}>
              <h1 style={styles.wwd.content.title}>What we do</h1>
              <h1 style={styles.wwd.content.title}>at Portal Finance</h1>
              <h4 style={styles.wwd.content.text}>We use technology to understand and assess a company, they worked hard to build their businesses and we work hard to value that work</h4>
              <Buttom color="transparent" border={true} borderColor="white" action={this.props.actions.gotoInfoWwd} >LEARN MORE</Buttom>
            </div>
          </div>
          <img style={Object.assign({}, styles.wwd.image, image_syle)} src="http://www.www8-hp.com/sa/en/images/overview_hero_tcm_173_1302368.png" />
        </div>

      </div>
    )
  }
}

export default Radium(Wwd);

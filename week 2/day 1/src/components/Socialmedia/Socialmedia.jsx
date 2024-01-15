import classes from './style.module.scss'

import patternHills from '../../assets/pattern-hills.svg'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import pinterest from '../../assets/icon-pinterest.svg'

const Socialmedia = () => {
  return (
    <section className={classes.countdownfooter}>
        <section className={classes.countdownsocial}>
            <img src={facebook} />
            <img src={pinterest} />
            <img src={instagram} />
        </section>
        <img className={classes.footerimg} src={patternHills} />
    </section>
  )
}

export default Socialmedia
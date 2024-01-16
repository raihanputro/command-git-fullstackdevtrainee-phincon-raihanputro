// import Backbutton from './components/Backbutton/Backbutton'
import Detailcountry from './components/Detailcountry/DetailCountry'

import classes from './style.module.scss'

const Detail = () => {
  return (
    <div className={classes.detailCountryContainer}>
      {/* <Backbutton /> */}
      <Detailcountry />
    </div>
  )
}

export default Detail
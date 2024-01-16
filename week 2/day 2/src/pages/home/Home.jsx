import React from 'react'

import Countrylist from './components/Countrylist/Countrylist'

import classes from './style.module.scss'

const Home = () => {
  return (
    <>
        <div className={classes.homeContainer}>
          <Countrylist />
        </div>
    </>
  )
}

export default Home
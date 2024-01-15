import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import Title from "../../components/Title/Title"
import Countdown from '../../components/Countdown/Countdown'
import Socialmedia from '../../components/Socialmedia/Socialmedia'

import classes from './style.module.scss'


const Home = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);

    const startTimer = () => {
      
      const countDownDate = new Date(queryParameters.get("date") || "2024-07-17").getTime();

      interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
          clearInterval(interval.current)
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      })
    }

    useEffect(() => {
      startTimer();
    });

  return (
    <section className={classes.countdowncontainer}>
        <Title />
        <Countdown timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
        <Socialmedia />
    </section>
  )
}

export default Home
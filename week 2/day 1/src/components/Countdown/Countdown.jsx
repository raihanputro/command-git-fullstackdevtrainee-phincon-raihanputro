import classes from './style.module.scss'

const Countdown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
        <div className={classes.countdown}>
            <section className={classes.countdowntimer}>
                <section>
                    <h1>{timerDays}</h1>
                    <p>Days</p>
                </section>
                <section>
                    <h1>{timerHours}</h1>
                    <p>Hours</p>
                </section>
                <section>
                    <h1>{timerMinutes}</h1>
                    <p>Minutes</p>
                </section>
                <section>
                    <h1>{timerSeconds}</h1>
                    <p>Seconds</p>
                </section>
            </section>
        </div>
  )
}

Countdown.defaultProps = {
    timerDays:  0,
    timerHours:  0,
    timerMinutes:  0,
    timerSeconds: 0,    
}

export default Countdown
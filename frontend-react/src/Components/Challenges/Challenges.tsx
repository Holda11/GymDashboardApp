import React, { useState } from 'react'
import IChallenges from '../../Supports/Interfaces/IChallenges'
import style from './Challenges.module.scss'

const Challenges = () => {
  const [lastTime, setLastTime] = useState(new Date())

    const ChallengesInformation = ({subHeadingText, subHeadingDate, heading, money}:IChallenges):JSX.Element =>{
        return(
            <div className={style['ChallengesCard']}>
              <div className={style['ChallengesCard__SubHeading']}>
              <h5>{subHeadingText}:{subHeadingDate}</h5>
              <strong>{heading}</strong>
              </div>
              <div className={style['ChallengesCard__Money']}>
                <span>{money}</span>
              </div>
            </div>
        )
    }
  return (
    <div className={style['Challenges']}>
        <h3>Challenges</h3>
        <ChallengesInformation subHeadingText='Poslední nákup' subHeadingDate={lastTime.toDateString()} heading='Vstupy' money={5246} />
        <ChallengesInformation subHeadingText='Poslední nákup' subHeadingDate={lastTime.toDateString()} heading='Bar' money={5246} />
    </div>
  )
}

export default Challenges
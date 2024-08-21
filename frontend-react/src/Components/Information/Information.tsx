import React from 'react'
import ProfileWidget from '../ProfileWidget/ProfileWidget.tsx'
import Calendar from '../Calendar/Calendar.tsx'
import Challenges from '../Challenges/Challenges.tsx'
import style from './Information.module.scss'

const Information = () => {
  return (
    <aside className={style['InformationContainer']}>
        <ProfileWidget/>
        <Calendar/>
        <Challenges/>
    </aside>
  )
}

export default Information
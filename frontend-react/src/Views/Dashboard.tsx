import React from 'react'
import Counting from '../Components/Counting/Counting.tsx'
import PopularClass from '../Components/PopularClass/PopularClass.tsx'
import Timeline from '../Components/Timeline/Timeline.tsx'
import ProfileWidget from '../Components/ProfileWidget/ProfileWidget.tsx'
import Challenges from '../Components/Challenges/Challenges.tsx'
import style from './Styling/Dashboard.module.scss'
import Calendar from '../Components/Calendar/Calendar.tsx'

const Dashboard = () => {
    return (
        <div className={style['Dashboard']}>
            <div className={style['Dashboard__Left']}>
                <div className={style['Row']}>
                    <Counting />
                    <PopularClass />
                </div>
                <Timeline />
            </div>
            <div className={style['Dashboard__Right']}>
                <ProfileWidget />
                <Calendar />
                <Challenges />
            </div>
        </div>
    )
}

export default Dashboard
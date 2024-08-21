import React from 'react'
import Counting from '../Components/Counting/Counting.tsx'
import PopularClass from '../Components/PopularClass/PopularClass.tsx'
import Timeline from '../Components/Timeline/Timeline.tsx'
import style from './Styling/Dashboard.module.scss'
import { FaInbox } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

const Dashboard = () => {
    return (
        <div className={style['Dashboard']}>
            <div className={style['Dashboard__Column']}>
                <div className={style['Dashboard__Text']}>
                    <h2>Ahoj Joe, jak se dneska máte?</h2>
                    <div className={style['Gap']}>
                        <FaInbox className={style['Icon']}/>
                        <FaMessage className={style['Icon']}/>
                    </div>
                </div>
                <div className={style['Row']}>
                    <Counting />
                    <PopularClass />
                </div>
                <div className={style['Dashboard__Bottom']}>
                <Timeline />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
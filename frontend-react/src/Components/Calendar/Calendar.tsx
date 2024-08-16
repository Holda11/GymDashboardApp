import React, { useState } from 'react'
import style from './Calendar.module.scss';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [currentDate, setCurrentDate] = useState(new Date())

  const startDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDay()
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()


  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day: string) => <th className={style["Calendar__Table--Days"]} key={day}>{day}</th>)
  }

  const renderDays = () => {
    const days: JSX.Element[] = [];
    let dayCount = 1;

    // První řádek kalendáře
    for (let i = 0; i < 7; i++) {
      if (i < startDayOfMonth) {
        days.push(<td className={style["Calendar__Table--Number"]} key={`empty-${i}`}></td>);
      } else {
        days.push(<td className={style["Calendar__Table--Number"]} key={dayCount}>{dayCount}</td>);
        dayCount++;
      }
    }

    // Následující řádky kalendáře
    while (dayCount <= daysInMonth) {
      const week: JSX.Element[] = [];
      for (let i = 0; i < 7; i++) {
        if (dayCount <= daysInMonth) {
          week.push(<td className={style["Calendar__Table--Number"]} key={dayCount}>{dayCount}</td>);
          dayCount++;
        } else {
          week.push(<td className={style["Calendar__Table--Number"]} key={`empty-${dayCount + i}`}></td>);
        }
      }
      days.push(<tr key={dayCount}>{week}</tr>);
    }

    return days;
  }



  return (
    <div className={style['Calendar']}>
      <div className={style['Calendar__Header']}>
        <button onClick={prevMonth}><FaAngleLeft /></button>
        <h3>
          {currentDate.toLocaleString('default', { month: 'short' }).toUpperCase()} {currentDate.getFullYear()}
        </h3>
        <button onClick={nextMonth}><FaAngleRight /></button>
      </div>
      <table className="Calendar__Table">
        <tr>{renderDaysOfWeek()}</tr>
        {renderDays()}
      </table>
    </div>
  )
}

export default Calendar
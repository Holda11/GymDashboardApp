import React from 'react'
import style from './PopularClass.module.scss'
import { FaLink } from 'react-icons/fa'

const PopularClass = () => {
  return (
    <div className={style["PopularClass"]}>
        <div className={style["PopularClass__Text"]}><h3>Popular Classes</h3><FaLink className={style["Icon"]}/></div>
        <div className={style["PopularClass__ImageContainer--Cardio"]}>
          <h4>Cardio</h4>
        </div>
        <div className={style["PopularClass__ImageContainer--Box"]}>
          <h4>Box</h4>
        </div>
        <button>See all classes</button>
    </div>
  )
}

export default PopularClass
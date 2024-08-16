import React from 'react'
import style from './PopularClass.module.scss'

const PopularClass = () => {
  return (
    <div className={style["PopularClass"]}>
        <h3>Popular Classes</h3>
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
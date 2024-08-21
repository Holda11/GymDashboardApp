import React from 'react'
import CashboxTable from '../Components/CashboxTable/CashboxTable.tsx'
import style from './Styling/Cashbox.module.scss'
import Counting from '../Components/Counting/Counting.tsx'

const Cashbox = () => {
  return (
    <div className={style['CashboxView']}>
      <div className={style['CashboxView__Top']}>
      <CashboxTable />
      </div>
      <div className={style['CashboxView__Bottom']}>
      <Counting />
      </div>
    </div>
  )
}

export default Cashbox
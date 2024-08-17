import React from 'react'
import CashboxTable from '../Components/CashboxTable/CashboxTable.tsx'
import style from './Styling/Cashbox.module.scss'

const Cashbox = () => {
  return (
    <div className={style['CashboxView']}>
        <CashboxTable />
    </div>
  )
}

export default Cashbox
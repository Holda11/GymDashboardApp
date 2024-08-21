import React from 'react'
import InventoryComponent from '../Components/Inventory/Inventory.tsx'
import style from './Styling/Inventory.module.scss'

const Inventory = () => {
  return (
    <div className={style['InventoryView']}>
      <div>

      <InventoryComponent/>
      </div>
      </div>
  )
}

export default Inventory
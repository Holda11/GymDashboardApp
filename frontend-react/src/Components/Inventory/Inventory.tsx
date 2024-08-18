import React from 'react'
import Data from '../../Supports/Data/Inventory.js'
import style from './Invetory.module.scss'

const InventoryComponent = () => {
    const inventory = Data.map((item) => item)

    const Table =()=>{
        return(
            <table className={style['Table']}>
                <tr>
                    <th>Název</th>
                    <th>Na skladě</th>
                    <th>Price</th>
                    <th>Akce</th>
                </tr>
                {inventory.map((item)=>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td><button>Přidat</button> | <button>Odebrat</button></td>
                </tr>
                )}
            </table>
        )
    }

  return (
    <div className={style['Inventory']}>
        <h3>Sklad</h3>
        <div>
        <Table />
        </div>
    </div>
  )
}

export default InventoryComponent
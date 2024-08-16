import React from 'react'
import Data from '../../Supports/Data/Inventory.js'

const CashboxTable = () => {
    
    const renderInvetory =()=>{
        const inventory = Data.map((item) => item)
       
        return inventory.map((item) => 
        <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Price}</td>
            <td>{item.Quantity}</td>
            <td><button>+</button>1<button>-</button></td>
        </tr>
        )
    }

  return (
    <table>
        <tbody>
            <tr>
                <th>Název</th>
                <th>Na Skladě</th>
                <th>Cena</th>
                <th>Akce</th>
            </tr>
                {renderInvetory()}
        </tbody>
    </table>
  )
}

export default CashboxTable
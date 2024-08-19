import React, { useState } from 'react'
import style from './CashboxTable.module.scss'
import Data from '../../Supports/Data/Inventory.js'
import Entries from '../../Supports/Data/Entries.js'
import Permission from '../../Supports/Data/Permission.js'

const CashboxTable = () => {
    const [revenueEntrie, setRevenueEntrie] = useState(0)
    const [revenuePermission, setRevenuePermission] = useState(0)
    const [revenueBar, setRevenueBar] = useState(0)
    
    

    const renderInvetory = (Inventory) => {
        const inventory = Inventory.map((item) => item)

        return inventory.map((item) =>
            <tr key={item.id}>
                <td>{item.name || item.type + ' ' + item.category}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td><button>+</button>0<button>-</button></td>
            </tr>
        )
    }

    const Table = ({ data }) => {
        return (
            <table className={style['Table']}>
                <tbody>
                    <tr>
                        <th>Název</th>
                        <th>Na Skladě</th>
                        <th>Cena</th>
                        <th>Akce</th>
                    </tr>
                    {renderInvetory(data)}
                </tbody>
            </table>
        )

    }

    const renderRevenue =(data, name)=>{
        data.forEach((item) => {
            if ((item.category === name || item) && name === 'Supplement') {
                setRevenueBar(item.price * item.qty)
            }
            if ((item.category === name || item) && name === 'Vstupy') {
                setRevenueEntrie(item.price * item.qty)
            }
            if ((item.category === name || item) && name === 'Permice') {
                setRevenuePermission(item.price * item.qty)
            }
        });
    }

    const Cards = ({ data, name, type, value}) => {
        renderRevenue(data, type)
        return (
            <div className={style['Cards']}>
                <div className={style['Cards__Row']}>
                    <h5>{name}</h5>
                    <strong>{value} Kč</strong>
                </div>
                <div>
                </div>
            </div>
        )
    }

    return (
        <div className={style['Cashbox']}>
            <div className={style['Cashbox__Column']}>
                <Cards data={Data} type={'Supplement'} name={'Bar'} value={revenueBar} />
                <Table data={Data} />
            </div>
            <div className={style['Cashbox__Column']}>
                <Cards data={Entries} type={'Vstupy'} name={'Vstupy'} value={revenueEntrie} />
                <Table data={Entries} />
            </div>
            <div className={style['Cashbox__Column']}>
                <Cards data={Permission} type={'Permice'} name={'Permice'} value={revenuePermission} />
                <Table data={Permission} />
            </div>
        </div>
    )
}

export default CashboxTable
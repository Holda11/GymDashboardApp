import React, { useState } from 'react'
import Data from '../../Supports/Data/Inventory.js'
import style from './Invetory.module.scss'
import { useModal } from '../Modal/Modal.tsx';


const InventoryComponent = () => {
    const inventory = Data.map((item) => item)
    const [isModalOpen, setModalOpen] = useState(false)

    const Table = () => {
        const { openModal } = useModal();
        return (
            <table className={style['Table']}>
                <tbody>
                <tr>
                    <th>Název</th>
                    <th>Na skladě</th>
                    <th>Price</th>
                    <th>Akce</th>
                </tr>
                {inventory.map((item) =>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td><button onClick={openModal}>Přidat</button> | <button>Odebrat</button></td>
                    </tr>
                )}
                </tbody>
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
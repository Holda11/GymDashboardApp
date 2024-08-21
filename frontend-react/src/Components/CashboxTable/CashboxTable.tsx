import React, { useState, useEffect } from 'react';
import style from './CashboxTable.module.scss';
import Data from '../../Supports/Data/Inventory.js';
import Entries from '../../Supports/Data/Entries.js';
import Permission from '../../Supports/Data/Permission.js';

const CashboxTable = () => {
    const [quantities, setQuantities] = useState({});
    const [inventory, setInventory] = useState(Data);
    const [entries, setEntries] = useState(Entries);
    const [permissions, setPermissions] = useState(Permission);
    const [originalData, setOriginalData] = useState({ inventory: Data, entries: Entries, permissions: Permission });

    const getKey = (type, id) => `${type}-${id}`;

    useEffect(() => {
        // Nepoužíváme upravení skladu tady, protože se nedá zobrazovat real-time změny na skladě
    }, [quantities]);

    const handleIncrement = (type, id) => {
        setQuantities(prev => ({
            ...prev,
            [getKey(type, id)]: (prev[getKey(type, id)] || 0) + 1
        }));
    };

    const handleDecrement = (type, id) => {
        setQuantities(prev => ({
            ...prev,
            [getKey(type, id)]: Math.max((prev[getKey(type, id)] || 0) - 1, 0)
        }));
    };

    const handleConfirm = () => {
        // Reset to the initial values
        setInventory(originalData.inventory);
        setEntries(originalData.entries);
        setPermissions(originalData.permissions);
        setQuantities({});
    };

    const renderInventory = (inventoryData, type) => inventoryData.map((item) => (
        <tr key={item.id}>
            <td>{item.name || `${item.type} ${item.category}`}</td>
            <td>{item.qty - quantities[getKey(type, item.id)] || item.qty}</td>
            <td>{item.price}</td>
            <td>
                <button onClick={() => handleIncrement(type, item.id)}>+</button>
                {quantities[getKey(type, item.id)] || item.qty}
                <button onClick={() => handleDecrement(type, item.id)}>-</button>
            </td>
        </tr>
    ));

    const Table = ({ data, type }) => (
        <table className={style['Table']}>
            <tbody>
                <tr>
                    <th>Název</th>
                    <th>Na Skladě</th>
                    <th>Cena</th>
                    <th>Akce</th>
                </tr>
                {renderInventory(data, type)}
            </tbody>
        </table>
    );

    const renderRevenue = (data, type) => data.reduce((sum, item) => sum + item.price * (item.qty + (quantities[getKey(type, item.id)] || 0)), 0);

    const Cards = ({ data, type, name }) => (
        <div className={style['Cards']}>
            <div className={style['Cards__Row']}>
                <h5>{name}</h5>
                <strong>{renderRevenue(data, type)} Kč</strong>
            </div>
        </div>
    );

    return (
        <div className={style['Cashbox']}>
            <div className={style['Cashbox__Column']}>
                <Cards data={permissions} type="Permice" name="Permice" />
                <Table data={permissions} type="Permice" />
            </div>
            <div className={style['Cashbox__Column']}>
                <Cards data={inventory} type="Supplement" name="Bar" />
                <Table data={inventory} type="Supplement" />
            </div>
            <div className={style['Cashbox__Column']}>
                <Cards data={entries} type="Vstupy" name="Vstupy" />
                <Table data={entries} type="Vstupy" />
            </div>
            <div className={style['Cashbox__Column']}>
                <button onClick={handleConfirm}>Reset</button>
            </div>
        </div>
    );
};

export default CashboxTable;

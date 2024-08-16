import React from 'react';
import Data from '../../Supports/Data/TimelineClasses';
import style from './Timeline.module.scss'

const Timeline = () => {
  const hoursOfShift = ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00',]

  const renderHours = () => {
    return hoursOfShift.map((hour) => <th>{hour}</th>)
  }

  const renderCard = (key: number) => {
    const cards: JSX.Element[] = [];
    const boxData = Data.find(item => item.id === key)?.items;

    // Předpokládám, že hoursOfShift je pole hodin nebo indexů, které máte k dispozici
    if (boxData) {
        for (let i = 1; i <= hoursOfShift.length; i++) {
            const foundItem = boxData.find(item => item.index.includes(i));
            if (foundItem) {
                // Přidání elementu s hodnotou jména pouze pro první výskyt
                const isFirstOccurrence = foundItem.index[0] === i;
                cards.push(
                    <td className={isFirstOccurrence ? style['Td__First'] : style['Td__Last']} key={i}>
                        {isFirstOccurrence ? foundItem.name : ""}
                    </td>
                );
            } else {
                cards.push(<td key={i}></td>);
            }
        }
    } else {
        console.log("No valid boxData found or boxData is undefined.");
    }

    return cards;
}


  const renderRows = () => {
    const rows: JSX.Element[] = [];
    for (let i = 1; i <= Data.length; i++) {
      rows.push(<tr>{renderCard(i)}</tr>)
    }
    return rows
  }



  return (
    <div className={style['Timeline']}>
      <div className={style['Timeline__Row']}>
      <h3>Timeline</h3>
      <table className={style['Timeline__Table']}>
        <tbody>
          <tr>
            {renderHours()}
          </tr>
          {renderRows()}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Timeline;

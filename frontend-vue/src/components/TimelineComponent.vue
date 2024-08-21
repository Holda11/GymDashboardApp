<script setup lang="jsx">
import Data from '@/Supports/Data/TimelineClasses'
const hoursOfShift = ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00',]

const renderHours = () => {
    return hoursOfShift.map((hour) => <th>{hour}</th>)
}

const renderCard = (key) => {
    const cards = [];
    const boxData = Data.find(item => item.id === key)?.items;

    // Předpokládám, že hoursOfShift je pole hodin nebo indexů, které máte k dispozici
    if (boxData) {
        for (let i = 1; i <= hoursOfShift.length; i++) {
            const foundItem = boxData.find(item => item.index.includes(i));
            if (foundItem) {
                // Přidání elementu s hodnotou jména pouze pro první výskyt
                const isFirstOccurrence = foundItem.index[0] === i;
                cards.push(
                    <td class={isFirstOccurrence ? 'Td__First' : 'Td__Last'} key={i}>
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
    const rows = [];
    for (let i = 1; i <= Data.length; i++) {
        rows.push(<tr>{renderCard(i)}</tr>)
    }
    return rows
}

const Timeline = () => {
    return (
        <div class='Timeline'>
            <div class='Timeline__Row'>
                <h3>Timeline</h3>
                <table class='Timeline__Table'>
                    <tbody>
                        <tr>
                            {renderHours()}
                        </tr>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
</script>

<template>
    <Timeline />
</template>

<style lang="scss">
@import '../assets/styles/variables.scss';

.Timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    

    &__Row {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 90%;
    }

    &__Table {
        border: 0.5px solid #c5c5c5;
        padding: 12px;
        border-radius: 16px;
        width: 90%;

        th {
            padding: 6px 24px;
            border-bottom: 2px solid black;
        }

        td {
            padding: 12px;
        }
    }
}

.Td__First {
    color: #fff;
    background: $highlight-Bgcolor;
    border-radius: 10px 0 0 10px;
}

.Td__Last {
    color: #fff;
    background: $highlight-Bgcolor;
    border-radius: 0 10px 10px 0;
}
</style>
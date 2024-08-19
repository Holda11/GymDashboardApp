<script setup lang="tsx">
import { ref, watchEffect } from 'vue';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const currentDate = ref(new Date());

function setCurrentDate(newValue: Date) {
    currentDate.value = newValue;
}

const startDayOfMonth = ref(new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1).getDay());
const daysInMonth = ref(new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate());

watchEffect(() => {
    startDayOfMonth.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1).getDay();
    daysInMonth.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
});

const prevMonth = () => {
    setCurrentDate(new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1));
};

const nextMonth = () => {
    setCurrentDate(new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1));
};

const renderDaysOfWeek = () => {
    return daysOfWeek.map(day => <th class="Calendar__Table--Days" key={day}>{day}</th>);
};

const renderDays = () => {
    const days = [];
    let dayCount = 1;
    // První řádek kalendáře
    for (let i = 0; i < 7; i++) {
        if (i < startDayOfMonth.value) {
            days.push(<td class="Calendar__Table--Number" key={`empty-${i}`}></td>);
        } else {
            days.push(<td class="Calendar__Table--Number" key={dayCount}>{dayCount}</td>);
            dayCount++;
        }
    }
    while (dayCount <= daysInMonth.value) {
        const week = [];
        for (let i = 0; i < 7; i++) {
            if (dayCount <= daysInMonth.value) {
                week.push(<td class="Calendar__Table--Number" key={dayCount}>{dayCount}</td>);
                dayCount++;
            } else {
                week.push(<td class="Calendar__Table--Number" key={`empty-${dayCount + i}`}></td>);
            }
        }
        days.push(<tr key={dayCount}>{week}</tr>);
    }
    return days;
};

const Calendar = () => {
    return (
        <div class='Calendar'>
            <div class='Calendar__Header'>
                <button onClick={prevMonth}>{'<'}</button>
                <h3>
                    {currentDate.value.toLocaleString('default', { month: 'short' }).toUpperCase()} {currentDate.value.getFullYear()}
                </h3>
                <button onClick={nextMonth}>{'>'}</button>
            </div>
            <table class="Calendar__Table">
                <thead>
                    <tr>{renderDaysOfWeek()}</tr>
                </thead>
                <tbody>
                    {renderDays()}
                </tbody>
            </table>
        </div>
    )
}

</script>

<template>
    <Calendar />
</template>

<style lang="scss">
/* CSS styles here */
</style>

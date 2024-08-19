<script setup lang="tsx">
import type IChallenges from '@/Supports/Interfaces/IChallenges'

const ChallengesInformation = ({ subHeadingText, subHeadingDate, heading, money }: IChallenges) => {
    return (
        <div class='ChallengesCard'>
            <div class='ChallengesCard__SubHeading'>
                <h5>{subHeadingText}: {subHeadingDate}</h5>
                <strong>{heading}</strong>
            </div>
            <div class='ChallengesCard__Money'>
                <span>{money}</span>
            </div>
        </div>
    )
}

// Příklad, jak byste mohli vypočítat datum
const lastTime = new Date();
</script>

<template>
    <ChallengesInformation :subHeadingText="'Poslední nákup'" :subHeadingDate="lastTime.toDateString()" heading="Vstupy"
        :money="5246" />
    <ChallengesInformation :subHeadingText="'Poslední nákup'" :subHeadingDate="lastTime.toDateString()" heading="Vstupy"
        :money="5246" />
</template>

<style lang="scss">
/* Vaše styly zde */
</style>
